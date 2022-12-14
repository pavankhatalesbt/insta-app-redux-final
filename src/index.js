import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Store} from "./Store/Store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
   <BrowserRouter>
    <App />

    </BrowserRouter>
    </Provider>
  </React.StrictMode>

   
 
);


