import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HeroesPage from './pages/HeroesPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path='/react-parcel'
        component={HeroesPage}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;