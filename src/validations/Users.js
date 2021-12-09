const Joi = require("joi");
const register = Joi.object({
  user_name: Joi.string().required().min(2),
  first_name: Joi.string().required().min(2),
  last_name: Joi.string().required().min(2),
  email: Joi.string().email().required().min(8),
  password: Joi.string().required().min(8),
});

const login = Joi.object({
  user_name: Joi.string().required().min(2),
  password: Joi.string().required().min(8),
});
module.exports = {
  register,
  login,
};
