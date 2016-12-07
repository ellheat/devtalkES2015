import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';

const logoStyle = {height: '100px'};

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['team'];
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (!this.props.team) {
      return null;
    }
    return (
      <div className="team">
        <img style={{...logoStyle}} src={this.props.team.crestUrl} alt=""/>
        <div>{this.props.team.name}</div>
        <div>{this.props.team.squadMarketValue}</div>
      </div>
    );
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  team: PropTypes.object
};
