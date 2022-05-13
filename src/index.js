import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import reducer from './reducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
);
