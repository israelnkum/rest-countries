import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { ApiProvider } from './context/ContextApi';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <ThemeProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
