import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
// import BrowserRouter from 'react-router/BrowserRouter';
import Routes from './routes';
import App from './App';
import 'antd/dist/antd.css';
const contentNode = document.getElementById('root')

ReactDOM.render( 
    <HashRouter>
        <App/>
    </HashRouter>
, contentNode);