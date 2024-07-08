const validateSchema = (schema) => (req, res, next) => {
  const {error, value} = schema.validate(req.body);
  console.log(value);
  if (error) {
    return res.status(400).json({error: error.details});
  }
  req.body = value; // Assign the validated value to req.body
  next();
};

export default validateSchema;
