import React, {Component, PropTypes} from 'react';
import {FormattedMessage} from 'react-intl';
import Paper from 'material-ui/Paper';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';

import {CompetitionsTable} from '../../widgets/competitionsTable';

const headerStyle = {textAlign: 'center'};

export class Competitions extends Component {
  componentDidMount() {
    this.props.getCompetitions();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['competitions'];
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (!this.props.competitions) {
      return null;
    }
    return (
      <div className="competitions">
        <h1 style={{...headerStyle}}>
          <FormattedMessage id="league"/>
        </h1>

        <Paper zDepth={1}>
          <CompetitionsTable competitions={this.props.competitions}/>
        </Paper>
      </div>
    );
  }
}

Competitions.PropTypes = {
  getCompetitions: PropTypes.func,
  competitions: PropTypes.object
};
