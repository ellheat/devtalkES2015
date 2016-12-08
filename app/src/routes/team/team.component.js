import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {pick, isObject} from 'lodash';

const logoStyle = {height: '100px'};

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.routeParams.id);
    this.props.getTeamPlayerList(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['team', 'players', 'randomPlayer'];
    console.log(this.props.players);
    if (nextProps.players !== this.props.players) {
      this.props.setRandomPlayer(this.getRandomPlayer(nextProps.players));
    }
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  /* eslint-disable */
  getRandomPlayer(playerList) {
    function* random() {
      while (true) {
        yield Math.floor(Math.random() * playerList.length);
      }
    }

    let rand = random();
    if (isObject(playerList)) {
      return playerList[rand.next().value];
    }
  }
  /* eslint-enable */

  render() {
    if (!this.props.team || !this.props.players || !this.props.randomPlayer) {
      return null;
    }

    return (
      <div className="team">
        <div className="team__container">
          <img style={{...logoStyle}} src={this.props.team.crestUrl} alt=""/>
          <div>{this.props.team.name}</div>
          <div>Random player generator: {this.props.randomPlayer.name}</div>
        </div>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Jersey Number</TableHeaderColumn>
              <TableHeaderColumn>Date of Birth</TableHeaderColumn>
              <TableHeaderColumn>Nationality</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {this.props.players.map(({name, position, nationality, jerseyNumber, dateOfBirth}, i) => {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{name}</TableRowColumn>
                  <TableRowColumn>{position}</TableRowColumn>
                  <TableRowColumn>{jerseyNumber}</TableRowColumn>
                  <TableRowColumn>{dateOfBirth}</TableRowColumn>
                  <TableRowColumn>{nationality}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
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
