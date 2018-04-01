import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import App from './App';
import 'antd/dist/antd.css';
const contentNode = document.getElementById('root')

ReactDOM.render( 
    <Router>
        <App/>
    </Router>
, contentNode);