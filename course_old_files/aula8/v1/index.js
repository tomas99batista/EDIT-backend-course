require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoDB = require("./db");

const usersCollection = "users";

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const db = await mongoDB.getDb();
  
  // check if the user submitted username corresponds to a user in our database
  const user = await db.collection(usersCollection).findOne({
    username: req.body.username,
  });
  if (!user) {
    return res.status(401).json({ result: "unauthorized" });
  }

  // validate if user submitted password matches the hash we stored in the database
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ result: "unauthorized" });
  }

  // JWT payload
  const payload = {
    userId: user._id,
  };

  // JWT options
  const options = {
    expiresIn: "1h",
  };

  // create JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);

  res.status(200).json({ result: "ok", token });
});

// insert authentication middleware in the chain
// all routes declared after this middleware are "behind" this authentication check
app.use((req, res, next) => {
  // check if request contains an header named "Authorization"
  // we expect the token to be send via this header
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({});
  }

  // verify if the token received in the header is valid
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({});
  }

  next();
});

// authenticated route - users without a valid token cannot access it
app.get("/users", async (req, res) => {
  const _db = await getDb();
  const posts = await _db
    .collection(postsCollection)
    .find({ subreditId: new ObjectId(req.params.id) })
    .toArray();

  res.status(200).json(posts);
});

app.listen(3000, () => {
  console.log("server is running...");
});
