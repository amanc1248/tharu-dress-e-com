import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import "../../styles/customer/CustomerHomeScreen.css";
function CustomerHomeScreen() {
  return (
    <div className="home">
      {/* 1st section) First Carousel */}
      <div className="carousel ">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\Home Carousel Image\images\IMG_2124.JPG"
              alt="First slide"
            />
            <Carousel.Caption>
              <h4 className="headingClothShortDescription">
                ANCHARA WITH RED BOUTIQUE
              </h4>
              <Link to="/womenCategory">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\group.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 className="headingClothShortDescription">
                ANCHARA FOR WOMEN
              </h4>
              <Link to="/womenCategory">
                <button type="button" name="button" className="carousel-button">
                  SHOP WOMEN
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\hrithik.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 class="headingClothShortDescription">MEN FABRIC</h4>
              <Link to="/menCategory">
                <button type="button" name="button" class="carousel-button">
                  SHOP MEN
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\anchara1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 className="headingClothShortDescription">ANCHARA FOR KIDS</h4>
              <Link to="/kidCategory">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images/Home Carousel Image/images/20190910_120902.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 className="headingClothShortDescription">
                MULTI-COLOR DHOTI
              </h4>
              <Link to="/menCategory">
                <button type="button" name="button" className="carousel-button">
                  SHOP DHOTI
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* 2nd Section) Second Carousel "New Arrival Section" */}
      <div className="second__section">
        <div className="second__section__heading">
          <h6>NEW ARRIVALS</h6>
        </div>
        <div className="carousel second__carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 second__carousel__image "
                src="images\Home Carousel Image\images\[au.burberry.com][9593].jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="shopTheLookBox">
                  <h6 className="shopTheLookHeading">
                    <button className="shop__the__look__button">
                      SHOP THE LOOK
                    </button>
                  </h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 second__carousel__image"
                src="images\Home Carousel Image\images\[au.burberry.com][10912].jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className="shopTheLookBox">
                  <h6 className="shopTheLookHeading">
                    <button className="shop__the__look__button">
                      SHOP THE LOOK
                    </button>
                  </h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 second__carousel__image"
                src="images\Home Carousel Image\images\[au.burberry.com][14779].jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className="shopTheLookBox">
                  <h6 className="shopTheLookHeading">
                    <button className="shop__the__look__button">
                      SHOP THE LOOK
                    </button>
                  </h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 second__carousel__image"
                src="images\Home Carousel Image\images\[au.burberry.com][63342].jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className="shopTheLookBox">
                  <h6 className="shopTheLookHeading">
                    <button className="shop__the__look__button">
                      SHOP THE LOOK
                    </button>
                  </h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 second__carousel__image"
                src="images\Home Carousel Image\images\[au.burberry.com][18608].jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className="shopTheLookBox">
                  <h6 className="shopTheLookHeading">
                    <button className="shop__the__look__button">
                      SHOP THE LOOK
                    </button>
                  </h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* 3rd Section) Sales section */}
      <div className="sale">
        <h1 className="saleHeading">SALE</h1>
        <div className="salesButton">
          <Link to="/menCategory">
            <button type="button" className="firstProduct">
              DHOTI
            </button>
          </Link>
          <Link to="/womenCategory">
            <button type="button" className="secondProduct">
              ANCHARA
            </button>
          </Link>
        </div>
      </div>
      {/* 4th) Kids section */}
      <div
        className="kids"
        style={{
          backgroundImage: `url("images/Home Carousel Image/images/[au.burberry.com][35112].jpg")`,
        }}
      >
        <div className="kids__container">
          <div className="kidsProductDescription">SHOP YOUR KIDS SIZE</div>
          <div className="kidsButton">
            <Link to="/kidCategory">
              <button type="button" className="shopKids__button">
                SHOP KIDS{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHomeScreen;
