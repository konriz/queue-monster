function validate(schema, property) {
  return (req, res, next) => {
    const {error} = schema.validate(req[property]);
    if (!error) {
      next();
    } else {
      const {details} = error;
      const message = details.map(detail => detail.message).join(', ');
      console.error("Validation error : ", message);
      res.status(422).json({error: message});
    }
  }
}

export default validate;
