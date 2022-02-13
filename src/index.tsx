import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Checkbox from './components/parts/checkbox/checkbox';
import Toggle from './components/parts/toggle/toggle';
import Home from './components/pages/home/home';
import Register from './components/pages/register/register';
import NotFound from './components/pages/notfound/notfound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='toggle' element={<Toggle />} /> <Route path='checkbox' element={<Checkbox />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
