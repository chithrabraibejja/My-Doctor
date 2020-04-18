import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./css/bootstrap.min.css"
import "./css/bootstrap/bootstrap-grid.css"
import "./css/animate.css"
import "./css/magnific-popup.css"
import "./css/owl.carousel.min.css"
import "./css/owl.theme.default.min.css"
import "./css/magnific-popup.css"
import "./css/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import "./css/bootstrap-datepicker.css"
import "./css/jquery.timepicker.css"
// import "./css/flaticon.css"
// import "./css/icomoon.css"
import "./css/style.css"






import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
