require("dotenv").config();

const port = process.env.PORT;
const passwordSecret = process.env.PASSWORD_SECRET;

console.log("port", port);
console.log("password:", passwordSecret);
