import {CALL_API} from 'redux-api-middleware';
import envConfig from '../../environment/base';

import API from '../api';

const teamResource = API('teams');

export const TEAM_LIST_REQUEST = 'TEAM_LIST_REQUEST';
export const TEAM_LIST_SUCCESS = 'TEAM_LIST_SUCCESS';
export const TEAM_LIST_FAILURE = 'TEAM_LIST_FAILURE';

export function getTeamList(id) {
  return {
    [CALL_API]: teamResource.get(`competitions/${id}/teams`, {
      types: [TEAM_LIST_REQUEST, TEAM_LIST_SUCCESS, TEAM_LIST_FAILURE],
      headers: {
        'X-Auth-Token': envConfig.token
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
