import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {isArray} from 'lodash';
import {Link} from 'react-router';

export class ES2015Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (isArray(this.props.competitions)) {
      return (
        <section className='es2015-table'>
          <Table allRowsSelected={true}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>League</TableHeaderColumn>
                <TableHeaderColumn>Number of games</TableHeaderColumn>
                <TableHeaderColumn>Number of matchdays</TableHeaderColumn>
                <TableHeaderColumn>Number of teams</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody stripedRows={true} displayRowCheckbox={false}>
              {this.props.competitions.map((data, i) => {
                const {league, caption, numberOfGames, numberOfMatchdays, numberOfTeams, id} = data;
                return (
                  <TableRow key={i}>
                    <TableRowColumn><Link to={`competition/${id}`}>{caption}</Link>
                    </TableRowColumn>
                    <TableRowColumn>{league}</TableRowColumn>
                    <TableRowColumn>{numberOfGames}</TableRowColumn>
                    <TableRowColumn>{numberOfMatchdays}</TableRowColumn>
                    <TableRowColumn>{numberOfTeams}</TableRowColumn>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </section>
      );
    }
    return false;
  }
}

if (__DEBUG__) {
  ES2015Table.propTypes = {};
}
