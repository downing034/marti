import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import './styles/app.css';

import RootContainer from './components/root-container';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <RootContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
