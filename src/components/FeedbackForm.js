// src/components/FeedbackForm.js

import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    experience: 'Fine',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Error submitting feedback');
    }
  };

  return (
    <div id='block'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div >
        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Share your experience in scaling</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        >
          <option value="Worst">Worst</option>
          <option value="Not Good">Not Good</option>
          <option value="Fine">Fine</option>
          <option value="Look Good">Look Good</option>
          <option value="Very Good">Very Good</option>
        </select>
      </div>
      <div>
        <label>Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  
  </div>
  );
};

export default FeedbackForm;
