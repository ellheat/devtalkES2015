import {CALL_API} from 'redux-api-middleware';
import envConfig from '../../environment/base';

import API from '../api';

const teamResource = API('teams');
const competitionsResource = API('competitions');

export const COMPETITIONS_REQUEST = 'COMPETITIONS_REQUEST';
export const COMPETITIONS_SUCCESS = 'COMPETITIONS_SUCCESS';
export const COMPETITIONS_FAILURE = 'COMPETITIONS_FAILURE';

export function getCompetitions() {
  return {
    [CALL_API]: competitionsResource.get('?season=2016', {
      types: [COMPETITIONS_REQUEST, COMPETITIONS_SUCCESS, COMPETITIONS_FAILURE],
      headers: {
        'X-Auth-Token': envConfig.api.xAuthToken
      },
      credentials: 'same-origin'
    })
  };
}

export const COMPETITION_REQUEST = 'COMPETITION_REQUEST';
export const COMPETITION_SUCCESS = 'COMPETITION_SUCCESS';
export const COMPETITION_FAILURE = 'COMPETITION_FAILURE';

export function getCompetition(id) {
  return {
    [CALL_API]: competitionsResource.get(`${id}/teams`, {
      types: [COMPETITION_REQUEST, COMPETITION_SUCCESS, COMPETITION_FAILURE],
      headers: {
        'X-Auth-Token': envConfig.api.xAuthToken
      },
      credentials: 'same-origin'
    })
  };
}

export const TEAM_LIST_REQUEST = 'TEAM_LIST_REQUEST';
export const TEAM_LIST_SUCCESS = 'TEAM_LIST_SUCCESS';
export const TEAM_LIST_FAILURE = 'TEAM_LIST_FAILURE';

export function getTeamList(id) {
  return {
    [CALL_API]: teamResource.get(`competitions/${id}/teams`, {
      types: [TEAM_LIST_REQUEST, TEAM_LIST_SUCCESS, TEAM_LIST_FAILURE],
      headers: {
        'X-Auth-Token': envConfig.api.xAuthToken
      },
      credentials: 'same-origin'
    })
  };
}

export const TEAM_REQUEST = 'TEAM_REQUEST';
export const TEAM_SUCCESS = 'TEAM_SUCCESS';
export const TEAM_FAILURE = 'TEAM_FAILURE';

export function getTeam(id) {
  return {
    [CALL_API]: teamResource.get(`${id}`, {
      types: [TEAM_REQUEST, TEAM_SUCCESS, TEAM_FAILURE],
      headers: {
        'X-Auth-Token': envConfig.api.xAuthToken
      },
      credentials: 'same-origin'
    })
  };
}
