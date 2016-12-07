import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export class ES2015Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='es2015-table'>
        <Table allRowsSelected={true}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Done</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Array function</TableRowColumn>
              <TableRowColumn>yes</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    );
  }
}

if (__DEBUG__) {
  ES2015Table.propTypes = {};
}
