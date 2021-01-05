import React, { useState } from "react";
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
              <div className="filter__options__content">
                <div className="color__close">
                  <CloseIcon
                    onClick={() => {
                      setIsShown(false);
                    }}
                  ></CloseIcon>
                </div>
                <Component />
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
      <div className="color__options col-lg-6 col-md-6 col-sm-12">
        <Checkbox></Checkbox>
        {color}
      </div>
    );
  });
  return (
    <div className="color">
      <div className="color__container">
        <form action="">
          {/* color options row 👇 */}
          <div className="color__options__row row justify-content-start">
            {colorsOptions}
          </div>
          {/* color options button 👇 */}
          <div className="color__options__button__row row justify-content-between">
            <div className=" clear__button__container col-lg-6 col-md-6 col-6text-left ">
              <button className="clear__button">CLEAR</button>
            </div>
            <div className=" show__results__button__container col-lg-6 col-md-6 col-6 text-left">
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
  return (
    <div>
      <h1>This is design</h1>
    </div>
  );
}

//SIZE👇
function Size() {
  return (
    <div>
      <h1>This is size</h1>
    </div>
  );
}

//STYLE👇
function Style() {
  return (
    <div>
      <h1>This is style</h1>
    </div>
  );
}
