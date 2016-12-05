import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Home} from './home.component';

function mapStateToProps() {
  return {

  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({

    }, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
