import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import { createRoot } from 'react-dom/client'; // React DOM render method
import React, { StrictMode } from 'react'; // StrictMode import
import App from './App.jsx'; // App component
import './index.css'; // Custom CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
