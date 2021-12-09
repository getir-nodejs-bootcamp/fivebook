const express = require("express");
const router = express.Router();
const blogController = require("../controllers/Blogs.js");
const validations = require("../validations/Blogs");
const validate = require("../middlewares/validate");

router.get("/", blogController.list);
router.post(
  "/create",
  validate(validations.create, "body"),
  blogController.create
);

module.exports = router;
