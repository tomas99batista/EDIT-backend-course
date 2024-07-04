import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const passwordSecret = process.env.PASSWORD_SECRET;

console.log("Port:", port);
console.log("Password:", passwordSecret);
