import {rootController} from "./src/root/root-controller.js";
import express from "express";
import {RootService} from "./src/root/root-service.js";

const app = express();
const port = 3000;

const rootService = new RootService();

app.get('/', (req, res) => rootController(rootService, req, res).listLeaves());
// TODO params for finding leafs
app.post('/', (req, res) => rootController(rootService, req, res).addLeaf());

app.listen(port, callback);

function callback() {
  console.log('Queue monster started');
}
