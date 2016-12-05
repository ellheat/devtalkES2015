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
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
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
