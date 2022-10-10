import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import './index.css';
import { ContextProvider } from './components/Context/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);
