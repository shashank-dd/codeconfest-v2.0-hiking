import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link,BrowserRouter,Route, Routes} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Images from './images';
import Sta from './statue';
import His from './history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/images' element={<Images/>}></Route>
    <Route path='/statue' element={<Sta/>}></Route>
    <Route path='/history' element={<His/>}></Route>
 
  </Routes>
 
  </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
