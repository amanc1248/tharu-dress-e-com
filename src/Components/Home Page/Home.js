import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
function Home() {
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
              <button type="button" name="button" className="carousel-button">
                SHOP ANCHARA
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\group.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 className="headingClothShortDescription">ANCHARA FOR KIDS</h4>
              <button type="button" name="button" className="carousel-button">
                SHOP KIDS
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\hrithik.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 class="headingClothShortDescription">MULTI-COLOR ANCHARA</h4>
              <button type="button" name="button" class="carousel-button">
                SHOP WOMEN
              </button>
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
              <button type="button" name="button" className="carousel-button">
                SHOP KIDS
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\20190910_120902.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4 class="headingClothShortDescription">MULTI-COLOR ANCHARA</h4>
              <button type="button" name="button" class="carousel-button">
                SHOP WOMEN
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* 2nd Section) Second Carousel "New Arrival Section" */}
      <div className="second__section__heading">
        <h6>NEW ARRIVALS</h6>
      </div>
      <div className="carousel second__carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\Home Carousel Image\images\[au.burberry.com][9593].jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\[au.burberry.com][10912].jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\[au.burberry.com][14779].jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\[au.burberry.com][63342].jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src="images\Home Carousel Image\images\[au.burberry.com][18608].jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="shopTheLookBox">
        <h6 className="shopTheLookHeading">
          <u>SHOP THE LOOK</u>
        </h6>
      </div>
      {/* 3rd Section) Sales section */}
      <div className="sale">
        <h1 className="saleHeading">SALE</h1>
        <div className="salesButton">
          <button type="button" className="firstProduct">
            DHOTI
          </button>
          <button type="button" className="secondProduct">
            ANCHARA
          </button>
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
            <button type="button" className="shopKids__button">
              SHOP KIDS{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
