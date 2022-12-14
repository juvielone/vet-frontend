import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// Disable react in production mode
if (process.env.REACT_APP_NODE_ENV === 'production') disableReactDevTools()
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

