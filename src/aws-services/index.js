import AWS from "aws-sdk";

function initialize() {
  AWS.config.getCredentials((err) => {
    if (err) {
      console.error("Aws initialization failed: ", err.message);
    } else {
      console.log("AWS initialized, access key: ", AWS.config.credentials.accessKeyId);
    }
  })
  AWS.config.update({region: "eu-central-1"});
}

const AWSService = { initialize }

export default AWSService;
