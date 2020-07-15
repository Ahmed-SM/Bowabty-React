import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';
import LoadLayout from "./layouts/LoadLayout";
const App = React.lazy(()=> import("./App"));


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <React.Suspense fallback={<LoadLayout/>}>
            <App />
          </React.Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
