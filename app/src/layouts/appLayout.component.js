import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <section className="app-layout">
        <AppBar title="ESSports"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={() => this.handleToggle()}/>

        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          {
            this.links.map(({title = 'Some title', url = '/'} = {}) => (
                <MenuItem onTouchTap={() => this.handleClose()}>
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
    const links = [{title: 'Home', url: '/'}, {title: 'Team', url: '/team'}];
    return links;
  }
}

if (__DEBUG__) {
  AppLayout.propTypes = {
    children: PropTypes.node
  };
}
