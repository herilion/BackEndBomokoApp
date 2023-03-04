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
    min: 3,
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
    min: 10,
  },
  town: {
    type: String,
    required: true,
    min: 3,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model("Users", userSchema);
