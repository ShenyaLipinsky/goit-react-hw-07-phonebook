import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/modern-normalize/modern-normalize.css';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
