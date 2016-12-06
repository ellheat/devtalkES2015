import React, {Component, PropTypes} from 'react';

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(66);
  }

  shouldComponentUpdate() {
    if (this.props.team._root) {
      this.name = this.props.team._root.entries[0][0].name;
      this.crestUrl = this.props.team._root.entries[0][0].crestUrl;
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="team">
        {this.name}
        <img src={this.crestUrl} alt="sdfds"/>
      </div>
    );
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  team: PropTypes.object
};
