import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './components/Navbar/navbar.js'
import Sidebar from './components/Sidebar/sidebar.js'
import reportWebVitals from './reportWebVitals';
import { allReducers } from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';


const store = createStore(allReducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Sidebar/></>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
