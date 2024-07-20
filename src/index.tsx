import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/index.scss';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <div className="page">
      <div className="page-container">
        <App />
      </div>
    </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
