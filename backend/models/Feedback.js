// backend/models/Feedback.js

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  email: String,
  experience: String,
  comments: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
