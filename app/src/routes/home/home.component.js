import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import Paper from 'material-ui/Paper';

import {ES2015Table} from '../../widgets/es2015Table';

const headerStyle = {textAlign: 'center'};

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 style={{...headerStyle}}>
          <FormattedMessage id="someMsg"/>
        </h1>

        <Paper zDepth={1}>
          <ES2015Table/>
        </Paper>
      </div>
    );
  }
}
