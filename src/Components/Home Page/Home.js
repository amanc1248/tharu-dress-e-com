import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div className="home">
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
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
              className="d-block w-100"
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
              className="d-block w-100"
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
              className="d-block w-100"
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
              className="d-block w-100"
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
    </div>
  );
}

export default Home;
