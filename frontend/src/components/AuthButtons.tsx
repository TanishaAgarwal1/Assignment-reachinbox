import React from 'react';
import axios from 'axios';

const AuthButtons: React.FC = () => {
  const handleGoogleAuth = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleOutlookAuth = () => {
    window.location.href = 'http://localhost:5000/auth/outlook';
  };

  return (
    <div>
      <button onClick={handleGoogleAuth}>Connect Google Account</button>
      <button onClick={handleOutlookAuth}>Connect Outlook Account</button>
    </div>
  );
};

export default AuthButtons;
