import rootRouter from "./root/rootRouter.js";
import bucketsRouter from "./buckets/bucketsRouter.js";
import express from "express";

const mainRouter = express.Router();

mainRouter.use('/root', rootRouter);
mainRouter.use('/buckets', bucketsRouter);

console.log("Main router initialized");
export default mainRouter;
