import {fromJS} from 'immutable';
import createReducer from 'create-reducer';
import {COMPETITIONS_SUCCESS, COMPETITION_SUCCESS, COMPETITION_LEAGUE_TABLE_SUCCESS} from './competitions.actions.js';

const initialState = fromJS({
  list: [],
  single: {},
  league: {}
});

export const competitionsReducer = createReducer(initialState, {
  [COMPETITIONS_SUCCESS](state, {payload}) {
    return state.setIn(['list'], payload);
  },
  [COMPETITION_SUCCESS](state, {payload}) {
    return state.setIn(['single'], payload);
  },
  [COMPETITION_LEAGUE_TABLE_SUCCESS](state, {payload}) {
    return state.setIn(['league'], payload);
  }
});
