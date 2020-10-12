import React, { lazy } from 'react';

// Components
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
const Landing = lazy(() => import('../pages/Landing'));
const OrphanageMap = lazy(() => import('../pages/OrphanageMap'));

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/app">
        <OrphanageMap />
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default MainRoutes;
