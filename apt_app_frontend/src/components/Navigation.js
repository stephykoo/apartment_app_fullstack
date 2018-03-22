import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Apartment App</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/register">
        Register
      </NavItem>
      <NavItem eventKey={2} href="/login">
        Login
      </NavItem>
      <NavItem eventKey={3} href="/logout">
        Logout
      </NavItem>
      <NavItem eventKey={5} href="/profile">
        Profile
      </NavItem>
      <NavItem eventKey={6} href="/apartments">
        All Apartments
      </NavItem>
      <NavItem eventKey={7} href="/new_apartment">
        New Apartment
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
