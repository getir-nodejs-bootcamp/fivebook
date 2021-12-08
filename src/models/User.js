const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    user_name: String,
    email: String,
    password: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
