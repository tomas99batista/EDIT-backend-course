import express from "express";
const app = express();

// ! NAMED MIDDLEWARE:
// const logRequest = (req, res, next) => {
//   console.log("DENTRO do middleware");
//   console.log(`${req.method} ${req.url}`);
//   next(); // Chama a próxima função
// };
// app.use(logRequest);
// app.get("/", logRequest, (req, res) => {
//   console.log("DEPOIS do middleware! - DENTRO ENDPOINT");
//   res.send("Hello World!");
// });

// ! REQUEST COUNT:
// let requestCount = 0
// const countRequests = (req, res, next) => {
// requestCount++
// console.log(`Request count: ${requestCount}`)
//   next();
// };
// app.use(countRequests);

// ! VALIDATE REQUEST:
// const validateRequest = (req, res, next) => {
//   if (!req.body.username) {
//     return res.status(400).send("username is required");
//   }
//   next();
// };
// app.post("/username", validateRequest, (req, res) => {
//   res.send("Username is valid");
// });

// ! ADDING TIME TO REQ ON MIDDLEWARE:
// const addTimeToReq = (req, res, next) => {
//   req.time = new Date().toISOString();
//   next();
// };
// app.use(addTimeToReq);

// ! Este middleware vai ser chamado em todas as rotas
// app.use((req, res, next) => {
//   console.log("DENTRO do middleware");
//   console.log(`${req.method} ${req.url}`);
//   next(); // Chama a próxima função
// });

app.get("/", (req, res) => {
  console.log("DEPOIS do middleware! - DENTRO ENDPOINT");
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
