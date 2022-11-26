import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assests/vendor/bootstrap/css/bootstrap.min.css"
import "./assests/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assests/vendor/boxicons/css/boxicons.min.css"
import "./assests/vendor/glightbox/css/glightbox.min.css"
import "./assests/vendor/remixicon/remixicon.css"
import "./assests/vendor/swiper/swiper-bundle.min.css"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
