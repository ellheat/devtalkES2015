import {connect} from 'react-redux';

import {Team} from './team.component';
import {getTeam} from '../../modules/team';

function mapStateToProps(store) {
  return {
    team: store.getIn(['team', 'single'])
  };
}

export default connect(mapStateToProps, {
  getTeam
})(Team);
