/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function BottomNav() {
  return (
    <div id="bottom-nav">
      <div id="top-rectangle">top</div>
      <button id="pay-request">R$</button>
      <div id="bottom-rectangle">
        <div id="home-button">
          <Link passHref href="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
        </div>
      </div>
    </div>
  );
}
