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

// Define transaction schema
const transactionSchema = new Schema({
  amount: Number,
  source: String,
  date: Date,
  motive: String,
  type: String, // income or expense
});

module.exports= mongoose.model('Users', userSchema);
module.exports= mongoose.model('Transaction', transactionSchema);
