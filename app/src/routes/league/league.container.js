import {connect} from 'react-redux';

import {League} from './league.component';
import {getCompetitionLeagueTable} from '../../modules/competitions';

function mapStateToProps(store) {
  return {
    league: store.getIn(['competitions', 'league'])
  };
}

export default connect(mapStateToProps, {
  getCompetitionLeagueTable
})(League);
