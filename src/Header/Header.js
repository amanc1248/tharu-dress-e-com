import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <a className="navbar-brand order-0 nav-link" href="#">
          DASA
        </a>
        <div
          className="collapse navbar-collapse text-right order-lg-0 order-last"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link menWomenKidsHeading" href="#">
                MEN <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menWomenKidsHeading" href="#">
                WOMEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menWomenKidsHeading" href="#">
                KIDS
              </a>
            </li>
          </ul>
        </div>
        <a className="searchIcon nav-link" href="#">
          <SearchIcon className="headerIcon"></SearchIcon>
        </a>
        <a className="nav-link" href="#">
          <PersonIcon className="headerIcon"></PersonIcon>
        </a>
        <a className="nav-link" href="#">
          <LocalMallIcon className="headerIcon"></LocalMallIcon>
        </a>
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
            <i className="fas fa-bars hamburger"></i>
          </span>
        </button>
      </nav>
    </div>
  );
}

export default Header;
