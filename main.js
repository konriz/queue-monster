import {rootController} from "./src/root/root-controller.js";
import express from "express";
import {RootService} from "./src/root/root-service.js";
import * as env from "./src/env/index.js";
import AWSService from "./src/aws-services/index.js";
import * as bucketsRoute from "./src/routes/buckets.js";
import bodyParser from "body-parser";

env.initialize();
AWSService.initialize();

const app = express();
const port = process.env["PORT"] || 3000;

const rootService = new RootService();

app.get('/', (req, res) => rootController(rootService, req, res).listLeaves());
app.post('/', (req, res) => rootController(rootService, req, res).addLeaf());

app.get('/buckets', bucketsRoute.listBuckets);

app.get('/buckets/:name', bucketsRoute.listBucketItems);

app.post('/buckets', bodyParser.json(), bucketsRoute.createBucket);

app.post('/buckets/:name', bodyParser.json(), bucketsRoute.uploadFile);


app.delete('/buckets/:name', bucketsRoute.deleteBucket);

app.listen(port, callback);

function callback() {
  console.log(`Queue monster started : ${port}`);
}
