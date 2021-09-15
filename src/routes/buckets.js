import s3Service from "../aws-services/s3-service.js";

export function listBuckets(req, res) {
  return s3Service.listBuckets().then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function listBucketItems(req, res) {
  const bucketName = req.params["name"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.listBucketItems(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function createBucket(req, res) {
  const bucketName = req.body["name"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.createBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function uploadFile(req, res) {
  const bucketName = req.params["name"];
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

export function deleteBucket(req, res) {
  const bucketName = req.params["name"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.removeBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}
