import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Dashboard/component/Home';

export default () => (
    <Switch>
        <Route path='/' exact component={Home} />
        {/*<Route path='/login' exact components={Login} />*/}
        <Route component={Home} />
    </Switch>
)