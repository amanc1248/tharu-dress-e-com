import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import { FormControl } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <Link className="navbar-brand order-0 nav-link" to="/">
          DASA
        </Link>
        <div
          className="collapse navbar-collapse text-right order-lg-0 order-last"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/men" className="nav-link menWomenKidsHeading">
                <div>MEN</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menWomenKidsHeading" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menWomenKidsHeading" to="/kids">
                KIDS
              </Link>
            </li>
          </ul>
        </div>
        <Link className="searchIcon nav-link" href="#">
          <SearchIcon className="headerIcon"></SearchIcon>
        </Link>
        <Link className="nav-link" to="/signin">
          <PersonIcon className="headerIcon"></PersonIcon>
        </Link>
        <Link className="nav-link" href="#">
          <LocalMallIcon className="headerIcon"></LocalMallIcon>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <MenuIcon className="headerIcon"></MenuIcon>
          </span>
        </button>
      </nav>
    </div>
  );
}

export default Header;
