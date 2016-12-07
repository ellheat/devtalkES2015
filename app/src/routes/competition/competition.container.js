import {connect} from 'react-redux';

import {Competition} from './competition.component';
import {getCompetition} from '../../modules/team';

function mapStateToProps(store) {
  return {
    competition: store.getIn(['team', 'competition'])
  };
}

export default connect(mapStateToProps, {
  getCompetition
})(Competition);
