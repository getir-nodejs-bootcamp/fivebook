const express = require("express");
const userController = require("../controllers/Users");
const validations = require("../validations/Users");
const validate = require("../middlewares/validate");

const router = express.Router();

router
  .route("/register")
  .post(validate(validations.register, "body"), userController.register);
router
  .route("/login")
  .post(validate(validations.login, "body"), userController.login);

module.exports = router;
