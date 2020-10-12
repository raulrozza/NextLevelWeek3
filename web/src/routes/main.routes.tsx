import React, { lazy } from 'react';

// Components
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
const Landing = lazy(() => import('../pages/Landing'));

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default MainRoutes;
