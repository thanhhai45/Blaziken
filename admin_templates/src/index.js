import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
        <Router>
            <div>
                <App />
            </div>
        </Router>
        , document.getElementById('root'));
registerServiceWorker();
