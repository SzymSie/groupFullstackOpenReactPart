import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Apps/App';
import AppExercise106 from './Apps/AppExercise106';
import AppExercise112 from './Apps/AppExercise112';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppExercise106 /> */}
    <AppExercise112 />
  </React.StrictMode>
);
