import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {App} from './app.component';

function mapStateToProps(store) {
  return {

  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({

    }, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);
