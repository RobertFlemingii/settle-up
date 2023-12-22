// AccountButton.js

import React from 'react';

const AccountButton = () => {
  const handleButtonClick = () => {
    // Add any functionality you want to execute when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Account
    </button>
  );
};

export default AccountButton;
