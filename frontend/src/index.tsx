// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global styles (if any)
// import './index.css'; // Uncomment this if you have global styles

// Create a root container for the React app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
