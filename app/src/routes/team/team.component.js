import React, {Component, PropTypes} from 'react';

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(66);
  }

  render() {
    return (
      <div className="team">
        Team
      </div>
    );
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  team: PropTypes.object
};
