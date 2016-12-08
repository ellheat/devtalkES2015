import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import TextField from 'material-ui/TextField';

const headerStyle = {textAlign: 'center'};

const divStyle = {padding: '20px'};

export class StringRepeating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: ''
    };
  }

  drawGoal(event) {
    this.setState({goal: 'Goal! '.repeat(event.target.value)});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="string-repeating">
        <h1 style={{...headerStyle}}>
          <FormattedMessage id="string"/>
        </h1>
        <div style={divStyle}>
          <TextField
            type="number"
            hintText="How many?"
            onChange={this.drawGoal.bind(this)}
          /><br />
          <div>{this.state.goal}</div>
        </div>
      </div>
    );
  }
}

StringRepeating.PropTypes = {};
