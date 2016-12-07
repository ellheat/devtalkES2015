import React from 'react';
import {Route} from 'react-router';
import LeagueTable from './league.container';

export default (
  <Route path="league/:id" component={LeagueTable} />
);
