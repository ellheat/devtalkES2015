import {connect} from 'react-redux';

import {Competition} from './competition.component';
import {getCompetition} from '../../modules/competitions';

function mapStateToProps(store) {
  return {
    competition: store.getIn(['competitions', 'single'])
  };
}

export default connect(mapStateToProps, {
  getCompetition
})(Competition);
