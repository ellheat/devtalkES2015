import React from 'react';
import {Route} from 'react-router';

import {App} from './app.container';
import HomeRoute from './home';
import TeamRoute from './team';
import AppLayout from '../layouts/appLayout.container';

export default (
  <Route path="/" component={App}>
    <Route component={AppLayout}>
      {HomeRoute}
      {TeamRoute}
    </Route>
  </Route>
);
