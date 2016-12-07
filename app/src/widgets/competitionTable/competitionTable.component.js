import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {isArray} from 'lodash';
import {Link} from 'react-router';

const logoStyle = {height: '100px'};

export class CompetitionTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (isArray(this.props.competition)) {
      return (
        <section className='competitions-table'>
          <Table allRowsSelected={true}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Code</TableHeaderColumn>
                <TableHeaderColumn>Logo</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody stripedRows={true} displayRowCheckbox={false}>
              {this.props.competition.map((data, i) => {
                const {name, code, crestUrl, _links} = data;
                const sliceLink = _links.self.href.split('/');
                const id = sliceLink[sliceLink.length - 1];
                return (
                  <TableRow key={i}>
                    <TableRowColumn><Link to={`/team/${id}`}>{name}</Link>
                    </TableRowColumn>
                    <TableRowColumn>{code}</TableRowColumn>
                    <TableRowColumn><img style={{...logoStyle}} src={crestUrl} alt=""/></TableRowColumn>
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
  CompetitionTable.propTypes = {};
}
