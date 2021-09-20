import express from "express";
import * as env from "./src/env/index.js";
import AWSService from "./src/aws-services/index.js";
import routes from "./src/routes/index.js";

env.initialize();
AWSService.initialize();

const app = express();
const port = process.env["PORT"] || 3000;

app.use(routes);

app.listen(port, callback);

function callback() {
  console.log(`Queue monster started : ${port}`);
}
