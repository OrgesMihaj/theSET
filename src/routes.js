import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Tournament from './components/tournament/Tournament';
import Articles from './components/article/Articles';

const Routes = (props) => (
    <div>
    <Switch>
        <Route exact path="/">
            <Tournament />
        </Route>

        <Route path="/now">
            <Tournament />
        </Route>

        <Route path="/articles">
            <Articles />
        </Route>

        {/* Default page */}
        <Route path="*" component={Tournament} />
    </Switch>
    </div>
);

export default Routes;