import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const first = {
  name: 'Arrow function',
  description: 'Expression bodies, Statement bodies, Lexical this'
};

const features = [
  first,
  {
    name: 'Constants',
    description: 'const'
  },
  {
    name: 'Scoping',
    description: 'Block-Scoped Variables, Block-Scoped Functions'
  },
  {
    name: 'Extend Parameter Handling',
    description: 'Default Parameter Values, Spread Operator'
  },
  {
    name: 'Template Literals',
    description: 'String Interpolation, Custom Interpolation'
  },
  {
    name: 'Enhanced Object Properties',
    description: 'Property Shorthand, Custom Property name'
  },
  {
    name: 'Destructuring Assignent',
    description: 'Object Matching, Array Matching, Destructuring Assigment, Parameter Context Matching'
  },
  {
    name: 'Modules',
    description: 'Export/Import, Default, Wildcard'
  },
  {
    name: 'Classes',
    description: 'Definition, Inheritance, Base Class Access, Getter/Setter'
  },
  {
    name: 'Generators',
    description: 'Generator Function'
  },
  {
    name: 'Map/Set',
    description: 'From immutable'
  },
  {
    name: 'New Built-In Methods',
    description: 'Find, String Repeating'
  },
  {
    name: 'Promises',
    description: 'Redux api middleware'
  },
  {
    name: 'Internationalization & Localization',
    description: 'Date/Time Formatting'
  }
];

export class ES2015Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='es2015-table' style={{width: '70%', margin: 'auto'}}>
        <Table allRowsSelected={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {
              features.map(({name, description: desc}, key) => (
                <TableRow key={key}>
                  <TableRowColumn>{name}</TableRowColumn>
                  <TableRowColumn>{desc}</TableRowColumn>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>
      </section>
    );
  }
}

if (__DEBUG__) {
  ES2015Table.propTypes = {};
}
