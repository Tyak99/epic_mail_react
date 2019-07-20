import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Header toggle={this.toggle} />
        <Sidebar isOpen={isOpen} />
      </Fragment>
    );
  }
}

export default Navigation;
