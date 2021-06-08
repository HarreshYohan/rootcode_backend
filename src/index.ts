import express = require("express");
import "reflect-metadata";
import dotenv = require("dotenv");
import setRoutes from './controllers/index.controller';
import { createDbConnection } from "./helper";

dotenv.config();
const app = express();
app.listen(process.env.PORT);
app.use(express.json());
console.log(`listening in port  ${process.env.PORT}`);

(async (): Promise<void> => {
    await createDbConnection();
  })();

setRoutes(app);