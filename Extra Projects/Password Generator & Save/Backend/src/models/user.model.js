const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "Guest",
  },
  email: {
    type: String,
    requires: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    requires: [true, "Password is required"],
    unique: [true, "Password already exists"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
