import React, {Component, PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {isArray} from 'lodash';

export class LeagueTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!isArray(this.props.league)) {
      return null;
    }
    return (
      <section className='competitions-table'>
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
            {this.props.league.map(({teamName, team, position, rank, goals, playedGames, points}, i) => {
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
