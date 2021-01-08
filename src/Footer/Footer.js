import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="website__footer row no-gutters">
        <div className="col-lg-3 col-md-3 firstSectionFooter">
          <div className="emailSignUpTitle">EMAIL SIGN-UP</div>
          <div className="emailSignUpInstruction">
            Sign up for email updates on the latest Dasa collections, campaigns
            and videos
          </div>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Subscribe
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
        <div className="col-lg-9 secondSectionFooter">
          <div className="row justify-content-around">
            <div className="col-lg-3 col-md-3 footer__links__container">
              <div className="followUsTitle">LET'S GROW TOGETHER</div>
              <Link to="/tailorSignin">
                <p className="footer__link ">Be Tailor</p>
              </Link>
              <Link to="/employeeSignIn">
                <p className="footer__link">Be Employee</p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 footer__links__container middle__links__container">
              <div className="followUsTitle">FOLLOW US</div>
              <div className="socialMediaIcons">
                <FacebookIcon className="socialIcon"></FacebookIcon>
                <YouTubeIcon className="socialIcon"></YouTubeIcon>
                <InstagramIcon className="socialIcon"></InstagramIcon>
                <TwitterIcon className="socialIcon"></TwitterIcon>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 footer__links__container">
              <div className="followUsTitle">LEGAL</div>
              <p className="footer__link">FAQs</p>
              <p className="footer__link">Know Us</p>
              <p className="footer__link">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
