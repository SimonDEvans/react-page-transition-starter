import React, { Component } from 'react';
import Page from '../Page';
import { NavLink } from 'react-router-dom';

class ChildPage extends Component {
  render() {
    return (
      <Page>
        <h1>Child page</h1>
        <p>I'm a child page.</p>
        <p>Visit a <NavLink to={{pathname: '/child-page/grandchild-page'}} className="add-a-class-here">grandchild page.</NavLink></p>
      </Page>
    );
  }
}

export default ChildPage;
