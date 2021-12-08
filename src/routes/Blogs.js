const express = require("express");
const router = express.Router();
const blogController = require("../controllers/Blogs.js");

router.get("/", blogController.list);
router.post("/create", blogController.create);

module.exports = router;
