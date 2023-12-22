// GroupsButton.js

import React from 'react';

const GroupsButton = () => {
  const handleButtonClick = () => {
    // Add any functionality you want to execute when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Groups
    </button>
  );
};

export default GroupsButton;
