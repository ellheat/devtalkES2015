import {connect} from 'react-redux';

import {Home} from './home.component';
import {getCompetitions} from '../../modules/team';

function mapStateToProps(store) {
  return {
    competitions: store.getIn(['team', 'listCompetitions'])
  };
}

export default connect(mapStateToProps, {
  getCompetitions
})(Home);
