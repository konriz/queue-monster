import s3Service from "../aws-services/s3-service.js";
import express from "express";
import bodyParser from "body-parser";

const bucketsRouter = express.Router();
bucketsRouter.get('', listBuckets);
bucketsRouter.get('/:bucket', listBucketItems);
bucketsRouter.get('/:bucket/:fileName', downloadFile)
bucketsRouter.post('', bodyParser.json(), createBucket);
bucketsRouter.post('/:bucket', bodyParser.json(), uploadFile);
bucketsRouter.delete('/:bucket', deleteBucket);
bucketsRouter.delete('/:bucket/:fileName', removeFile);
console.log("/buckets router initialized");

export default bucketsRouter;

function listBuckets(req, res) {
  return s3Service.listBuckets().then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function listBucketItems(req, res) {
  const bucketName = req.params["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.listBucketItems(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function downloadFile(req, res) {
  const bucketName = req.params["bucket"];
  const fileName = req.params["fileName"];
  if (!bucketName || !fileName) {
    return res.status(400).send("Specify bucket and file name");
  }
  return s3Service.downloadFile(bucketName, fileName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function createBucket(req, res) {
  const bucketName = req.body["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.createBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function uploadFile(req, res) {
  const bucketName = req.params["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  const body = req.body;
  if (!body["fileName"]) {
    return res.status(400).send("Specify file name");
  }
  const fileName = body["fileName"];
  return s3Service.uploadFile(bucketName, fileName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function removeFile(req, res) {
  const bucketName = req.params["bucket"];
  const fileName = req.params["fileName"];
  if (!bucketName || !fileName) {
    return res.status(400).send("Specify bucket and file name");
  }
  return s3Service.removeFile(bucketName, fileName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

function deleteBucket(req, res) {
  const bucketName = req.params["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.removeBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}
