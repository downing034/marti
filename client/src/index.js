import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import './styles/app.css';

import RootComponent from './components/root';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <RootComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
