import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css"


ReactDOM.render(
  <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
