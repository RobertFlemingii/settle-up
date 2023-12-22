// AddsButton.js

import React from 'react';

const AddsButton = () => {
  const handleButtonClick = () => {
    // Add any functionality you want to execute when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Adds
    </button>
  );
};

export default AddsButton;
