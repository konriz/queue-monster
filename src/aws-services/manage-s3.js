import AWS from "aws-sdk";

export async function listBuckets() {
  const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
  return new Promise((resolve, reject) => {
    s3.listBuckets((err, data) => {
      if (err) {
        console.error("Failed to list buckets: ", err.message);
        reject(err);
      } else {
        resolve(data.Buckets);
      }
    });
  });
}
