import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Author from './components/authorize';
ReactDOM.render(
    <Router>
        <div>
            {
                !localStorage.getItem("user") ?
                <Route path='/' children={(props) => {
                    return <Author />
                }} />
                :
                 <App />
            }
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
