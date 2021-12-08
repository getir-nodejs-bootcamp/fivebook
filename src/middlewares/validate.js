const hs = require("http-status");

// TODO: maybe refactor.
const validate = (schema, source) => (req, res, next) => {
  const { value, error } = schema.validate(req[source]);
  if (error) {
    const errorMessage = error?.details
      ?.map((detail) => detail?.message)
      .join(", ");
    //   ["message1", "message2", "m3"] => "message1, message2, m3"
    return res.status(hs.BAD_REQUEST).send({ error: errorMessage });
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
