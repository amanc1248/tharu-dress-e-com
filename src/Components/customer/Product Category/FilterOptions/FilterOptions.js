import React, { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./FilterOptions.css";
import CloseIcon from "@material-ui/icons/Close";
import { Checkbox } from "@material-ui/core";

const components = {
  Color,
  Design,
  Size,
  Style,
};
function FilterOptions({ ourOptions }) {
  const [isShown, setIsShown] = useState(false);
  const seeFilterContent = useRef(null);
  useEffect(() => {
    function hideSeeMore(event) {
      if (
        seeFilterContent.current &&
        !seeFilterContent.current.contains(event.target)
      ) {
        setIsShown(false);
      }
    }
    document.addEventListener("mousedown", hideSeeMore);
    return () => {
      document.removeEventListener("mousedown", hideSeeMore);
    };
  }, [isShown, seeFilterContent]);
  return (
    <div className="filter__option">
      {[ourOptions].map((ourOption) => {
        const Component = components[ourOption];
        return (
          <div className="filter__options__container">
            <div
              className="filter__options__button"
              onClick={() => {
                setIsShown(true);
              }}
            >
              {ourOption}
              <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
            </div>
            {isShown && (
              <div className="filter__options__content" ref={seeFilterContent}>
                <div className="option__close">
                  <CloseIcon
                    onClick={() => {
                      setIsShown(false);
                    }}
                  ></CloseIcon>
                </div>

                <Component></Component>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FilterOptions;

//COLOR👇
function Color() {
  let colors = ["ALL", "WHITE", "GREEN", "YELLOW"];
  let colorsOptions = colors.map((color) => {
    return (
      <div className="options col-lg-6 col-md-6 col-sm-12">
        <Checkbox></Checkbox>
        {color}
      </div>
    );
  });
  return (
    <div className="option">
      <div className="options__container">
        <form action="">
          {/* color options row 👇 */}
          <div className=" options__row row justify-content-start">
            {colorsOptions}
          </div>
          {/* color options button 👇 */}
          <div className=" options__button__row row justify-content-start">
            <div className=" clear__button__container col-lg-6 col-md-6 col-6  ">
              <button className="clear__button">CLEAR</button>
            </div>
            <div className=" show__results__button__container col-lg-6 col-md-6 col-6 ">
              <button className="show__results__button">SHOW RESULTS</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

//DESIGN👇
function Design() {
  let design = ["FLOWERS", "ART", "TEXT"];
  let designOptions = design.map((design) => {
    return (
      <div className="options col-lg-6 col-md-6 col-sm-12">
        <Checkbox></Checkbox>
        {design}
      </div>
    );
  });
  return (
    <div className="option">
      <div className="option__container">
        <form action="">
          {/* color options row 👇 */}
          <div className=" options__row row justify-content-start">
            {designOptions}
          </div>
          {/* color options button 👇 */}
          <div className="options__button__row row justify-content-start">
            <div className=" clear__button__container col-lg-6 col-md-6 col-6 ">
              <button className="clear__button">CLEAR</button>
            </div>
            <div className=" show__results__button__container col-lg-6 col-md-6 col-6">
              <button className="show__results__button">SHOW RESULTS</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

//SIZE👇
function Size() {
  return <div className="option">THis is size</div>;
}

//STYLE👇
function Style() {
  let style = [
    "ALL ROUNDED FLOWERS",
    "BOTTOM ONLY FLOWERS",
    "BOTTOM ONLY TEXT",
  ];
  let styleOptions = style.map((style) => {
    return (
      <div className="options col-lg-6 col-md-6 col-sm-12">
        <Checkbox></Checkbox>
        {style}
      </div>
    );
  });
  return (
    <div className="option">
      <div className="option__container">
        <form action="">
          {/* color options row 👇 */}
          <div className=" options__row row justify-content-start">
            {styleOptions}
          </div>
          {/* color options button 👇 */}
          <div className="options__button__row row ">
            <div className=" clear__button__container col-lg-6 col-md-6 col-6 ">
              <button className="clear__button">CLEAR</button>
            </div>
            <div className=" show__results__button__container col-lg-6 col-md-6 col-6">
              <button className="show__results__button">SHOW RESULTS</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
