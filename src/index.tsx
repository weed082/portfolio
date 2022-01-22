import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkbox from './component/part/checkbox/Checkbox';
import Toggle from './component/part/toggle/Toggle';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/checkbox' element={<Checkbox />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
