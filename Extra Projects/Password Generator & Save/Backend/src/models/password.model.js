const mongoose = require("mongoose");

const passwordsSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Untitled",
  },
  username: {
    type: String,
    default: "Guest",
  },
  email: {
    type: String,
    requires: [true, "Email is required"],
  },
  password: {
    type: String,
    requires: [true, "Password is required"],
  },
});
