import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {pick, isObject} from 'lodash';

const logoStyle = {height: '100px'};

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.routeParams.id);
    this.props.getTeamPlayerList(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['team', 'players', 'randomPlayer'];
    console.log(this.props.randomPlayer);
    if (nextProps.players !== this.props.players) {
      this.props.setRandomPlayer(this.getRandomPlayer(nextProps.players))
    }
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  getRandomPlayer(playerList) {
    function* random () {
      while (true) {
        yield Math.floor(Math.random() * playerList.count);
      }
    }

    let rand = random();
    if (isObject(playerList)) {
      return playerList.players[rand.next().value];
    }
  }

  render() {
    if (!this.props.team && !this.props.players && !this.props.randomPlayer) {
      return null;
    }
    return (
      <div className="team">
        <img style={{...logoStyle}} src={this.props.team.crestUrl} alt=""/>
        <div>{this.props.team.name}</div>
        <div>{this.props.randomPlayer.name}</div>
      </div>
    );
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  getTeamPlayerList: PropTypes.func,
  setRandomPlayer: PropTypes.func,
  team: PropTypes.object,
  players: PropTypes.object,
  randomPlayer: PropTypes.object
};
