import React from 'react';
import AuthButtons from '../components/AuthButtons';
import EmailList from '../components/EmailList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Email Automation Tool</h1>
      <AuthButtons />
      <EmailList />
    </div>
  );
};

export default HomePage;
