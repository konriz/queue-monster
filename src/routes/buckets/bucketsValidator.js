import Joi from "joi";

const bucketSchema = Joi.object({
  bucket: Joi.string().required()
});

const fileNameSchema = {
  fileName: Joi.string().required()
}

export default {bucketSchema, fileNameSchema};
