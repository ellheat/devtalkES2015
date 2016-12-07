import {connect} from 'react-redux';

import {Competitions} from './competitions.component';
import {getCompetitions} from '../../modules/competitions';

function mapStateToProps(store) {
  return {
    competitions: store.getIn(['competitions', 'list'])
  };
}

export default connect(mapStateToProps, {
  getCompetitions
})(Competitions);
