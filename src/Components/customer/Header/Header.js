import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Nav, Navbar } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  // const { pathname } = useLocation();
  //so here I am using useState, (navbar-->current value), (setNavbar--> changing value)
  const [navbarColor, setNavbarColor] = useState(false);
  const changeHeaderBg = () => {
    if (window.scrollY >= 63) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  //forSearchIcon
  const [search, setsearch] = useState(false);

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

        <div className="search__bar__container">
          <div
            className=""
            onClick={() => {
              // setIsShown(true);
            }}
          >
            <Nav.Link className="the__header__icon">
              <SearchIcon
                className={
                  navbarColor
                    ? "navbar__component__whenScrolled"
                    : "navbar__component__whennotscrolled"
                }
                onClick={() => {
                  setsearch(true);
                }}
              ></SearchIcon>
            </Nav.Link>
          </div>
          {search && (
            <div className="search__bar__content">
              <SearchBar
                toggleSearch={() => {
                  setsearch(false);
                }}
              />
            </div>
          )}
        </div>

        <Nav.Link href="/signin" className="the__header__icon">
          <PersonIcon
            className={
              navbarColor
                ? "navbar__component__whenScrolled"
                : "navbar__component__whennotscrolled"
            }
          ></PersonIcon>
        </Nav.Link>
        <Nav.Link href="/cart" className="the__header__icon">
          <LocalMallIcon
            className={
              navbarColor
                ? "navbar__component__whenScrolled"
                : "navbar__component__whennotscrolled"
            }
          ></LocalMallIcon>
        </Nav.Link>
        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            {/* <i className="fas fa-bars hamburger"></i> */}
            <FontAwesomeIcon icon={faBars} className="hamburger__toogler" />
          </span>
        </Navbar.Toggle>
      </Navbar>
    </div>
  );
}

export default Header;
export function SearchBar({ toggleSearch }) {
  return (
    <div className="search__bar">
      <div className="close__icon__container">
        <CloseIcon onClick={toggleSearch} className="close__icon"></CloseIcon>
      </div>
      <div className="searching__bar">
        <input type="text" placeholder="search" className="searching__input" />
        <SearchIcon className="search__icon"></SearchIcon>
      </div>
    </div>
  );
}
