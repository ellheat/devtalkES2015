import {fromJS} from 'immutable';
import createReducer from 'create-reducer';
import {TEAM_LIST_SUCCESS, TEAM_SUCCESS, COMPETITIONS_SUCCESS} from './team.actions.js';

const initialState = fromJS({
  list: [],
  listCompetitions: [],
  single: {}
});

export const teamReducer = createReducer(initialState, {
  [TEAM_LIST_SUCCESS](state, {payload}) {
    return state.merge({
      list: payload
    });
  },
  [TEAM_SUCCESS](state, {payload}) {
    return state.setIn(['single'], payload);
  },
  [COMPETITIONS_SUCCESS](state, {payload}) {
    return state.setIn(['listCompetitions'], payload);
  }
});
