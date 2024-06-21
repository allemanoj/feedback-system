// backend/routes/feedback.js

const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

router.post('/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.send({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error submitting feedback' });
  }
});

module.exports = router;
