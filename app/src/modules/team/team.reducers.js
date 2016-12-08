import {fromJS} from 'immutable';
import createReducer from 'create-reducer';
import {
  TEAM_LIST_SUCCESS, TEAM_SUCCESS, TEAM_PLAYER_LIST_SUCCESS, SET_RANDOM_PLAYER
} from './team.actions.js';

const initialState = fromJS({
  list: [],
  single: {},
  players: [],
  randomPlayer: {}
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
  [TEAM_PLAYER_LIST_SUCCESS](state, {payload: {players}} = {}) {
    return state.setIn(['players'], players);
  },
  [SET_RANDOM_PLAYER](state, {payload}) {
    return state.setIn(['randomPlayer'], payload);
  }
});
