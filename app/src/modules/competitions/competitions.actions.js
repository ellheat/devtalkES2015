import {CALL_API} from 'redux-api-middleware';

import API from '../api';

const competitionsResource = API('competitions');

export const COMPETITIONS_REQUEST = 'COMPETITIONS_REQUEST';
export const COMPETITIONS_SUCCESS = 'COMPETITIONS_SUCCESS';
export const COMPETITIONS_FAILURE = 'COMPETITIONS_FAILURE';

export function getCompetitions() {
  return {
    [CALL_API]: competitionsResource.get('?season=2016', {
      types: [COMPETITIONS_REQUEST, COMPETITIONS_SUCCESS, COMPETITIONS_FAILURE]
    })
  };
}

export const COMPETITION_REQUEST = 'COMPETITION_REQUEST';
export const COMPETITION_SUCCESS = 'COMPETITION_SUCCESS';
export const COMPETITION_FAILURE = 'COMPETITION_FAILURE';

export function getCompetition(id) {
  return {
    [CALL_API]: competitionsResource.get(`${id}/teams`, {
      types: [COMPETITION_REQUEST, COMPETITION_SUCCESS, COMPETITION_FAILURE]
    })
  };
}
