import express = require("express");
import dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT
const app = express();

app.listen(PORT, () => console.log(`Running on ${process.env.PORT} ⚡`));