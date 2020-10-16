import React, { lazy } from 'react';

// Components
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
const CreateOrphanage = lazy(() => import('../pages/CreateOrphanage'));
const Landing = lazy(() => import('../pages/Landing'));
const Orphanage = lazy(() => import('../pages/Orphanage'));
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
      <Route path="/orphanages/create">
        <CreateOrphanage />
      </Route>
      <Route path="/orphanages/:id">
        <Orphanage />
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default MainRoutes;
