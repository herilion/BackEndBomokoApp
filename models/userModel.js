const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    min: 7,
    unique: true,
  },
  postname: {
    type: String,
    required: true,
    min: 3,
    unique: false,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    min: 11,
  },
  town: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 7,
  },
});

module.exports = mongoose.model("Users", userSchema);
