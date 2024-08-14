import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Excluir o BrowserRouter se for uma SPA */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);