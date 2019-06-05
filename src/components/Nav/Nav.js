import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink exact to={{ pathname: '/' }} className="nav__link">Home </NavLink>
        <NavLink to={{ pathname: '/child-page' }} className="nav__link">Child page</NavLink>
      </nav>
    );
  }
}

export default Nav;
