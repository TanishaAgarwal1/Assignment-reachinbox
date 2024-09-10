import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailList: React.FC = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/emails?accountType=google&accessToken=your_access_token').then((response) => {
      setEmails(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Emails</h2>
      {emails.map((email, index) => (
        <div key={index}>
          <p>{email.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
