import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux"
import './index.css';

import App from './App';
import statsOBSRemoteClientApp from "./data/reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(statsOBSRemoteClientApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
