import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './components/Navbar/navbar.js'
import Sidebar from './components/Sidebar/sidebar.js'
import Footer from './components/Footer/footer.js'
import About from './components/About/about'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Sidebar />
    <About />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
