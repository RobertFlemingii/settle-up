// FriendsButton.js

import React from 'react';

const FriendsButton = () => {
  const handleButtonClick = () => {
    // Add any functionality you want to execute when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Friends
    </button>
  );
};

export default FriendsButton;
