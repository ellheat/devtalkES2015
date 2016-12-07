import React, {Component, PropTypes} from 'react';
import {FormattedMessage} from 'react-intl';
import Paper from 'material-ui/Paper';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';

import {ES2015Table} from '../../widgets/es2015Table';

const headerStyle = {textAlign: 'center'};

export class Home extends Component {
  componentDidMount() {
    this.props.getCompetitions();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['competitions'];
    return shallowCompare({
      props: pick(this.props, compareProps),
      state: this.state
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (this.props.competitions) {
      return (
        <div className="home">
          <h1 style={{...headerStyle}}>
            <FormattedMessage id="someMsg"/>
          </h1>

          <Paper zDepth={1}>
            <ES2015Table competitions={this.props.competitions}/>
          </Paper>
        </div>
      );
    }
    return false;
  }
}

Home.PropTypes = {
  getCompetitions: PropTypes.func,
  competitions: PropTypes.array
};
