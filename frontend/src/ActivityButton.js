// ActivityButton.js

import React from 'react';

const ActivityButton = () => {
  const handleButtonClick = () => {
    // Add any functionality you want to execute when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Activity
    </button>
  );
};

export default ActivityButton;
