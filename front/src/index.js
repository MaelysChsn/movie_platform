import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
