// src/App.js

import React from 'react';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  return (
    <div className='App'>
      <img src="your-image-url.jpg" alt="Landing" className="custom-image" />
      <h1>Feedback Collection System</h1>
      <FeedbackForm />
    </div>
  );
};

export default App;
