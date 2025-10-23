import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './i18n';

import './styles/palette.module.css';
import './styles/brand.module.css';
import './styles/tokens.module.css';
import './styles/z-index.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
