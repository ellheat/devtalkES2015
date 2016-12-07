import React from 'react';
import {Route} from 'react-router';

import {App} from './app.container';
import HomeRoute from './home';
import TeamRoute from './team';
import CompetitionRoute from './competition';
import CompetitionsRoute from './competitions';
import AppLayout from '../layouts/appLayout.container';

export default (
  <Route path="/" component={App}>
    <Route component={AppLayout}>
      {HomeRoute}
      {TeamRoute}
      {CompetitionRoute}
      {CompetitionsRoute}
    </Route>
  </Route>
);
