import React from 'react';
import {Route} from 'react-router';
import Competition from './competition.container';

export default (
  <Route path="competition/:id" component={Competition} />
);
