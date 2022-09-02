import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// Importing Context.js and wrapping the whole <App/> component to make state defined to whole react app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
  </React.StrictMode>
);


