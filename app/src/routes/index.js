import React from 'react';
import {Route} from 'react-router';

import {App} from './app.container';
import HomeRoute from './home';
import TeamRoute from './team';

export default (
  <Route path="/" component={App}>
    {HomeRoute}
    {TeamRoute}
  </Route>
);
