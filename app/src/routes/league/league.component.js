import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';
import {map} from 'lodash';
import Paper from 'material-ui/Paper';

import {LeagueTable} from '../../widgets/leagueTable';

const headerStyle = {
  textAlign: 'center',
  margin: '0',
  padding: '20px'
};

export class League extends Component {
  componentDidMount() {
    this.props.getCompetitionLeagueTable(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['league'];
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (!(this.props.league.standing || this.props.league.standings)) {
      return null;
    }
    if (this.props.league.standing) {
      return (
        <div className="league">
          <h1 style={{...headerStyle}}>
            {this.props.league.leagueCaption}
          </h1>

          <Paper zDepth={1}>
            <LeagueTable league={this.props.league.standing}/>
          </Paper>
        </div>
      );
    } else {
      return (
        <div className="league">
          <h1 style={{...headerStyle}}>
            {this.props.league.leagueCaption}
          </h1>
          {map(this.props.league.standings, (data, i) => {
            return (
              <Paper key={i} zDepth={1}>
                <h1 style={{...headerStyle}}>{i}</h1>
                <LeagueTable league={data}/>
              </Paper>
            );
          })}
        </div>
      );
    }
  }
}

League.PropTypes = {
  getCompetitionLeagueTable: PropTypes.func,
  league: PropTypes.array
};
