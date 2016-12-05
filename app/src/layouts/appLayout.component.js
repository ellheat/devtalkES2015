import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';

export class AppLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app-layout">
        <AppBar title="ESSports"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>

        {this.props.children}
      </section>
    );
  }
}

if (__DEBUG__) {
  AppLayout.propTypes = {
    children: PropTypes.node
  };
}
