import React, { Component } from 'react';
import Nav from 'components/Nav/Nav'
import Routing from './Routing'

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routing />
      </div>
    );
  }
}

export default DefaultLayout;
