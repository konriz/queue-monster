import AWS from "aws-sdk";
import fs from "fs";

function s3() {
  return new AWS.S3({apiVersion: "2006-03-01"});
}

async function listBuckets() {
  return new Promise((resolve, reject) => {
    s3().listBuckets(callback(resolve, reject, "Failed to list buckets: "));
  });
}

async function listBucketItems(bucketName) {
  return new Promise((resolve, reject) => {
    const bucketParams = {Bucket: bucketName};
    s3().listObjects(bucketParams, callback(resolve, reject, "Failed to list buckets: "));
  });
}

async function createBucket(bucketName) {
  const bucketParams = {Bucket: bucketName};
  return new Promise((resolve, reject) => {
    s3().createBucket(bucketParams, callback(resolve, reject, "Failed to create bucket: "));
  });
}

async function uploadFile(bucketName, fileName) {
  const fileStream = fs.createReadStream("./uploads/" + fileName);
  fileStream.on('error', function (err) {
    console.log('File Error', err);
  });

  const uploadParams = {Bucket: bucketName, Key: fileName, Body: fileStream};
  return new Promise((resolve, reject) => {
    s3().upload(uploadParams, callback(resolve, reject, "Failed to create bucket: "));
  });
}

async function downloadFile(bucketName, fileName) {
  const downloadParams = {Bucket: bucketName, Key: fileName};
  return new Promise((resolve, reject) => {
    s3().getObject(downloadParams, callback(resolve, reject, "Failed to download object: "));
  })
}

async function removeFile(bucketName, fileName) {
  const removeParams = {Bucket: bucketName, Key: fileName};
  return new Promise((resolve, reject) => {
    s3().deleteObject(removeParams, callback(resolve, reject, "Failed to remove object: "));
  })

}

async function removeBucket(bucketName) {
  const bucketParams = {Bucket: bucketName};
  return new Promise((resolve, reject) => {
    s3().deleteBucket(bucketParams, callback(resolve, reject, "Failed to delete buckets: "));
  });
}

function callback(resolve, reject, errorMessage) {
  return (err, data) => {
    if (err) {
      console.error(errorMessage, err.message);
      reject(err);
    } else {
      resolve(data);
    }
  }
}

const s3Service = {
  listBuckets,
  createBucket,
  uploadFile,
  downloadFile,
  removeFile,
  removeBucket,
  listBucketItems
};

export default s3Service;
