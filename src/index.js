import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cryptocontext from './Cryptocontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cryptocontext>
    <App />
    </Cryptocontext>
  </React.StrictMode>
);

