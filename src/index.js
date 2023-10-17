// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your root component
import './index.css'; // Import your global styles if any

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

