/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBarAuth() {
  return (
    <div id="top-nav">
      <Navbar className="justify-content-center">
        <Container>
          <Navbar.Brand>Rhino$plits</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">{/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
