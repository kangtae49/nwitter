import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseInstance } from './fbase';

console.log(firebaseInstance);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
