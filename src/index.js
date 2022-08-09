// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import Main from './main'
// import './assets/css/index.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Main />
    
 
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import ReactDOM from "react-dom/client";
import './assets/css/index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import AddPorfolio from "./components/_PRIVATE/AddPorfolio";
import AddTestimonial from "./components/_PRIVATE/AddTestimonial";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin/add/portfolio" element={<AddPorfolio/>} />
      <Route path="admin/add/testimonial" element={<AddTestimonial />} />
    </Routes>
  </BrowserRouter>
);