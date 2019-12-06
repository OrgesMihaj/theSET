import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Articles from './components/articles/Articles';
import Tournament from './components/tournament/Tournament';

const Routes = (props) => (
    <div>
    <Switch>
        <Route exact path="/"   component={Tournament}></Route>
        <Route path="/now"      component={Tournament}></Route>
        <Route path="/articles" component={Articles}></Route>

        {/* Default page */}
        <Redirect to="/" />
    </Switch>
    </div>
);

export default Routes;