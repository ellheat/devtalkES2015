import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(66);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['team'];
    return shallowCompare({
      props: pick(this.props, compareProps),
      state: this.state
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (this.props.team) {
      return (
        <div className="team">
          <img src={this.props.team.crestUrl} alt=""/>
          <div>{this.props.team.name}</div>
          <div>{this.props.team.squadMarketValue}</div>
        </div>
      );
    }
    return false;
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  team: PropTypes.object
};
