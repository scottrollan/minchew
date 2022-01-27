import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        className={styles.navBar}
      >
        <Navbar.Brand>
          <h3>Minchew | Media</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/about"
            >
              About
            </Link>

            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/agencies"
            >
              For Agencies
            </Link>
            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/advertisers"
            >
              For Advertisers
            </Link>
            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => $('.navbar-toggler').click()}
              className="item nav-link"
              to="/experience"
            >
              Experience
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
