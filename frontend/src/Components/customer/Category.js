import React from "react";
import "../../styles/components/category.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
function Category({
  category_image,
  category_title,
  sub_category_title_1,
  sub_category_title_2,
  sub_category_title_3,
  sub_category_title_4,
  sub_category_title_5,
  sub_category_image_1,
  sub_category_image_2,
  sub_category_image_3,
  sub_category_image_4,
  sub_category_image_5,
  firstLink,
  secondLink,
  thirdLink,
}) {
  return (
    <div className="category">
      {/* Main Category */}
      <div
        className="main__category"
        style={{
          backgroundImage: `url(${category_image})`,
        }}
      >
        <p className="category__title">{category_title}</p>
      </div>
      {/* 1st sub category collection */}
      <div className="first__sub__category__collection row container-fluid p-0 m-0">
        <div
          className="item item__1 col-lg-6 col-md-6"
          style={{
            backgroundImage: `url(${sub_category_image_1})`,
          }}
        >
          <div className="item__description">
            <span className="sub__category__title">{sub_category_title_1}</span>
            <Link to={firstLink}>
              <p className="discover__more__button">
                DISCOVER MORE <ChevronRightIcon></ChevronRightIcon>
              </p>
            </Link>
          </div>
        </div>
        <div className="second__third__item col-lg-6 col-md-6 p-0">
          <div
            className=" item item__2"
            style={{
              backgroundImage: `url(${sub_category_image_2})`,
            }}
          >
            <div className=" item item__description">
              <span className="sub__category__title">
                {sub_category_title_2}
              </span>
              <Link to={secondLink}>
                <p className="discover__more__button">
                  DISCOVER MORE <ChevronRightIcon></ChevronRightIcon>
                </p>
              </Link>
            </div>
          </div>
          <div
            className="item item__3"
            style={{
              backgroundImage: `url(${sub_category_image_3})`,
            }}
          >
            <div className="item__description">
              <span className="sub__category__title">
                {sub_category_title_3}
              </span>
              <Link to={thirdLink}>
                <p className="discover__more__button">
                  DISCOVER MORE <ChevronRightIcon></ChevronRightIcon>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd sub category collection */}
      <div className="second__sub__category__collection">
        <div
          className="item item__4"
          style={{
            backgroundImage: `url(${sub_category_image_4})`,
          }}
        >
          <div className="item__description">
            <span className="sub__category__title">{sub_category_title_4}</span>
            <p className="discover__more__button">
              DISCOVER MORE <ChevronRightIcon></ChevronRightIcon>
            </p>
          </div>
        </div>
        <div
          className="item item__5"
          style={{
            backgroundImage: `url(${sub_category_image_5})`,
          }}
        >
          <div className="item__description">
            <span className="sub__category__title">{sub_category_title_5}</span>
            <p className="discover__more__button">
              DISCOVER MORE <ChevronRightIcon></ChevronRightIcon>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
