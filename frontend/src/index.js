import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // actually the react application mode is always in strict mode but as we need to navigate through out the pages im multiplae page apllication s we need to reamove the strice 
  // here the important aspect is browseRoute attribute,it helps in navigating the pages in multiple page application

  // {very important here by strict mode same component renders two times in react}
  <BrowserRouter>
  <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
