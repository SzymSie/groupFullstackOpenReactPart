import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Apps/App';
import AppExercise106 from './Apps/AppExercise106';
import AppExercise112 from './Apps/AppExercise112';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppExercise106 /> */}
    <AppExercise112 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
