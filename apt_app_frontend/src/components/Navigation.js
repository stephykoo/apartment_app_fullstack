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
      <NavItem eventKey={1} href="#">
        Register
      </NavItem>
      <NavItem eventKey={2} href="#">
        Login
      </NavItem>
      <NavItem eventKey={3} href="#">
        Logout
      </NavItem>
      <NavItem eventKey={4} href="#">
        All Apartments
      </NavItem>
      <NavItem eventKey={5} href="#">
        New Apartment
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
