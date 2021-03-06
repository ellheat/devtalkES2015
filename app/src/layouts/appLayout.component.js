import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';

export class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      changeState: false,
      date: `en-EN: ${(new Intl.DateTimeFormat('en-EN')).format(new Date())}`
    };
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  changeDate() {
    const language = this.state.changeState ? 'en-EN' : 'pl-PL';
    this.setState({
      date: `${language}: ${(new Intl.DateTimeFormat(language)).format(new Date())}`,
      changeState: !this.state.changeState
    });
  }

  render() {
    return (
      <section className='app-layout'>
        <AppBar title='ESSports'
                onLeftIconButtonTouchTap={() => this.handleToggle()}
                iconElementRight={<FlatButton><span>{this.state.date}</span></FlatButton>}
                onRightIconButtonTouchTap={() => this.changeDate()}
        />

        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          {
            this.links.map(({title = 'Some title', url = '/'} = {}, key) => (
                <MenuItem key={key} onTouchTap={() => this.handleClose()}>
                  <Link to={url}>{title}</Link>
                </MenuItem>
              )
            )
          }
        </Drawer>

        {this.props.children}
      </section>
    );
  }

  get links() {
    const links = [{title: 'Home', url: '/'}, {title: 'Competitions', url: '/competitions'}, {
      title: 'String-repeating',
      url: '/string-repeating'
    }];
    return links;
  }
}

if (__DEBUG__) {
  AppLayout.propTypes = {
    children: PropTypes.node
  };
}
