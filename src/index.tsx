import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/index.scss';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <div className="page">
      <div className="page-container">
        <App />
      </div>
    </div>
    </Provider>
  </React.StrictMode>,
);
