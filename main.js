import {rootController} from "./src/root/root-controller.js";
import express from "express";
import {RootService} from "./src/root/root-service.js";
import * as env from "./src/env/index.js";
import * as AWS from "./src/aws-services/index.js";

env.initialize();
AWS.initialize();

const app = express();
const port = process.env["PORT"] || 3000;

const rootService = new RootService();

app.get('/', (req, res) => rootController(rootService, req, res).listLeaves());
// TODO params for finding leafs
app.post('/', (req, res) => rootController(rootService, req, res).addLeaf());

app.get('/buckets', (req, res) => {
  AWS.S3.listBuckets().then(buckets => res.send({buckets})).catch(() => res.status(500).send());
});

app.listen(port, callback);

function callback() {
  console.log(`Queue monster started : ${port}`);
}
