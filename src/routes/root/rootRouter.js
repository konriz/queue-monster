import express from "express";
import {RootService} from "../../root/root-service.js";

const rootService = new RootService();

const rootRouter = express.Router();
rootRouter.get('/', (req, res) => listLeaves(req, res));
rootRouter.post('/', (req, res) => addLeaf(req, res));
rootRouter.get('/:uuid', (req, res) => findLeaf(req, res));
console.log("/root router initialized");

export default rootRouter;

function listLeaves(req, res) {
  res.send(rootService.listLeaves());
}

function addLeaf(req, res) {
  res.send({leafId: rootService.createLeaf()});
}

function findLeaf(req, res) {
  const uuid = req.params["uuid"];
  if (!uuid) {
    return res.status(400).send("Specify leaf uuid");
  }
  res.send({leaf: rootService.findLeaf(uuid)});
}


