import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="website__footer row no-gutters">
        <div className="col-lg-4 firstSectionFooter">
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
        <div className="col-lg-8 secondSectionFooter">
          <div className="row justify-content-around">
            <div className="col-lg-6 col-md-6 followUsLinks">
              <div className="followUsTitle">FOLLOW US</div>
              <div className="socialMediaIcons">
                <FacebookIcon className="socialIcon"></FacebookIcon>
                <YouTubeIcon className="socialIcon"></YouTubeIcon>
                <InstagramIcon className="socialIcon"></InstagramIcon>
                <TwitterIcon className="socialIcon"></TwitterIcon>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 additionalInformationLinks">
              <a className="footerPadding footerColor" href="#">
                FAQs
              </a>
              <a className="footerPadding footerColor" href="#">
                Know Us
              </a>
              <a className="footerPadding footerColor" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
