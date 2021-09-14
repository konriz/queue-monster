import AWS from "aws-sdk";
import {listBuckets} from "./manage-s3.js";

export function initialize() {
  AWS.config.getCredentials((err) => {
    if (err) {
      console.error("Aws initialization failed: ", err.message);
    } else {
      console.log("AWS initialized, access key: ", AWS.config.credentials.accessKeyId);
    }
  })
  AWS.config.update({region: "eu-central-1"});
}

export const S3 = {
  listBuckets
};
