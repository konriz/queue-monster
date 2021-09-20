import s3Service from "../aws-services/s3-service.js";

export function listBuckets(req, res) {
  return s3Service.listBuckets().then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function listBucketItems(req, res) {
  const bucketName = req.params["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.listBucketItems(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function downloadFile(req, res) {
  const bucketName = req.params["bucket"];
  const fileName = req.params["fileName"];
  if (!bucketName || !fileName) {
    return res.status(400).send("Specify bucket and file name");
  }
  return s3Service.downloadFile(bucketName, fileName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function createBucket(req, res) {
  const bucketName = req.body["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.createBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function uploadFile(req, res) {
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

export function removeFile(req, res) {
  const bucketName = req.params["bucket"];
  const fileName = req.params["fileName"];
  if (!bucketName || !fileName) {
    return res.status(400).send("Specify bucket and file name");
  }
  return s3Service.removeFile(bucketName, fileName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}

export function deleteBucket(req, res) {
  const bucketName = req.params["bucket"];
  if (!bucketName) {
    return res.status(400).send("Specify bucket name");
  }
  return s3Service.removeBucket(bucketName).then(buckets => res.send({buckets})).catch((err) => res.status(500).send(err));
}
