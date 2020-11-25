import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        {routes}
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
