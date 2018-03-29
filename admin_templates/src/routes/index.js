import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routers from './routers';
import List from './../components/categories';
import Fading from './Fading';

const Routes = () => {
    // <Router>
    //     <Switch>
    //         <Route exact path='/' component={List}/>
    //     </Switch>
    // </Router>
    <Router>
        <Switch>
            {
                routers.map((route, i) => {
                    return <Fading key={i} route={route}/>
                })
            }
        </Switch>
    </Router>
}

export default Routes;