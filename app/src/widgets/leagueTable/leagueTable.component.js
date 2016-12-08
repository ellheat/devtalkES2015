import React, {Component, PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {isArray} from 'lodash';

export class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: this.props.league
    };
  }

  showOnlyFirstPosition() {
    this.setState({
      league: [this.state.league.find(data => data.rank ? data.rank === 1 : data.position === 1)]
    });
  }

  render() {
    if (!isArray(this.state.league)) {
      return null;
    }
    return (
      <section className='competitions-table'>
        <button onClick={() => this.showOnlyFirstPosition()}>Show only first position</button>
        <Table allRowsSelected={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Place</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Goals</TableHeaderColumn>
              <TableHeaderColumn>Played Games</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {this.state.league.map(({teamName, team, position, rank, goals, playedGames, points}, i) => {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{position || rank}</TableRowColumn>
                  <TableRowColumn>{teamName || team}</TableRowColumn>
                  <TableRowColumn>{goals}</TableRowColumn>
                  <TableRowColumn>{playedGames}</TableRowColumn>
                  <TableRowColumn>{points}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    );
  }
}

if (__DEBUG__) {
  LeagueTable.propTypes = {
    league: PropTypes.array
  };
}
