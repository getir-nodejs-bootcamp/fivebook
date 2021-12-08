const Joi = require("joi");
const registerUser = Joi.object({
  user_name: Joi.string().required().min(2),
  first_name: Joi.string().required().min(2),
  last_name: Joi.string().required().min(2),
  email: Joi.string().email().required().min(8),
  password: Joi.string().required().min(8),
});

module.exports = {
  registerUser,
};
