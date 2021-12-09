const Joi = require("joi");

// TODO: check for user id validation
const create = Joi.object({
  title: Joi.string().required().min(2),
  body: Joi.string().required().min(8),
  date: Joi.date(),
  author: Joi.object({
    user_name: Joi.string().required().min(2),
    /* id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
     }, */
  }),
});

module.exports = {
  create,
};
