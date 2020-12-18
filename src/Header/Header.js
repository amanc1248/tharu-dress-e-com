import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link, useLocation } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/Menu";
// import ScriptTag from "react-script-tag";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  // const { pathname } = useLocation();
  //so here I am using useState, (navbar-->current value), (setNavbar--> changing value)
  const [navbarColor, setNavbarColor] = useState(false);
  const changeHeaderBg = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBg);
  return (
    <div className=" ">
      <Navbar
        bg
        expand="lg"
        fixed="top"
        className={navbarColor ? "headerWhenScrolled" : "headerWhenNotScrolled"}
      >
        <Navbar.Brand
          href="/"
          className={
            "navbar__brand " +
            (navbarColor
              ? "navbar__component__whenScrolled"
              : "navbar__component__whennotscrolled")
          }
        >
          DASA
        </Navbar.Brand>
        {/* INside the navbar.collapse will be everything which will be collapsed */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-right order-lg-0 order-last"
        >
          <Nav className="mr-auto">
            <Nav.Link
              href="men"
              className={
                // "menWomenKidsHeading" +
                navbarColor
                  ? "navbar__component__whenScrolled"
                  : "navbar__component__whennotscrolled"
              }
            >
              MEN
            </Nav.Link>
            <Nav.Link
              href="women"
              className={
                // "menWomenKidsHeading" +
                navbarColor
                  ? "navbar__component__whenScrolled"
                  : "navbar__component__whennotscrolled"
              }
            >
              WOMEN
            </Nav.Link>
            <Nav.Link
              href="kids"
              className={
                // "menWomenKidsHeading" +
                navbarColor
                  ? "navbar__component__whenScrolled"
                  : "navbar__component__whennotscrolled"
              }
            >
              KIDS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link>
          <SearchIcon
            className={
              navbarColor
                ? "navbar__component__whenScrolled"
                : "navbar__component__whennotscrolled"
            }
          ></SearchIcon>
        </Nav.Link>
        <Nav.Link href="/signin">
          <PersonIcon
            className={
              navbarColor
                ? "navbar__component__whenScrolled"
                : "navbar__component__whennotscrolled"
            }
          ></PersonIcon>
        </Nav.Link>
        <Nav.Link href="/cart">
          <LocalMallIcon
            className={
              navbarColor
                ? "navbar__component__whenScrolled"
                : "navbar__component__whennotscrolled"
            }
          ></LocalMallIcon>
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="our__toogler"
        />
      </Navbar>
    </div>
  );
}

export default Header;
