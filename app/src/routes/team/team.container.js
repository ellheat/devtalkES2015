import {connect} from 'react-redux';

import {Team} from './team.component';
import {getTeam, getTeamPlayerList, setRandomPlayer} from '../../modules/team';

function mapStateToProps(store) {
  return {
    team: store.getIn(['team', 'single']),
    players: store.getIn(['team', 'players']),
    randomPlayer: store.getIn(['team', 'randomPlayer'])
  };
}

export default connect(mapStateToProps, {
  getTeam,
  getTeamPlayerList,
  setRandomPlayer
})(Team);
