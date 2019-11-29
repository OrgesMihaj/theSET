import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Tournament from './components/tournament/Tournament';

const Routes = (props) => (
<Router {...props}>
    <Switch>
        <Route path={"/"} component={Tournament} exact />
        <Route path={"/now"} component={Tournament} />


        {/* Default page */}
        <Route path="*" component={Tournament} />
    </Switch>
</Router>
);

export default Routes;