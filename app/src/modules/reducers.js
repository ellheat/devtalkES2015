import {combineReducers} from 'redux-immutable';

import {routerReducer as routing} from './utils';
import {localesReducer as locales} from './locales';
import {teamReducer as team} from './team';

export default combineReducers({
  routing,
  locales,
  team
});
