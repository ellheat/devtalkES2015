import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';
import {FormattedMessage} from 'react-intl';
import Paper from 'material-ui/Paper';

import {CompetitionTable} from '../../widgets/competitionTable';

const headerStyle = {textAlign: 'center'};

export class Competition extends Component {
  componentDidMount() {
    this.props.getCompetition(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['competition'];
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (!this.props.competition) {
      return null;
    }
    return (
      <div className="competition">
        <h1 style={{...headerStyle}}>
          <FormattedMessage id="competition"/>
        </h1>

        <Paper zDepth={1}>
          <CompetitionTable competition={this.props.competition.teams}/>
        </Paper>
      </div>
    );
  }
}

Competition.PropTypes = {
  getCompetition: PropTypes.func,
  competition: PropTypes.array
};
