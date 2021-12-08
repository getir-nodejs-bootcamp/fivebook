const express = require("express");
const { register, login } = require("../controllers/Users");
const { registerUser } = require("../validations/Users");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/register").post(validate(createUser, "body"), register);
router.route("/login").post(validate(createUser, "body"), login);

module.exports = router;
