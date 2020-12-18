import React from "react";
import { Checkbox } from "@material-ui/core";

function Color() {
  return (
    <div className="color">
      <div className="color__container">
        <form action="">
          {/* color options row 👇 */}
          <div className="color__options__row row justify-content-start">
            <div className="color__options__first__row col-lg-6 col-12">
              <div className="color__options">
                <Checkbox></Checkbox>
                ALL
              </div>
              <div className="color__options">
                <Checkbox></Checkbox>
                YELLOW
              </div>
            </div>
            <div className="color__options__second__row col-lg-6 col-12">
              <div className="color__options">
                <Checkbox></Checkbox>
                WHITE
              </div>
              <div className="color__options">
                <Checkbox></Checkbox>
                GREEN
              </div>
            </div>
          </div>
          {/* color options button 👇 */}
          <div className="color__options__button__row row justify-content-between">
            <div className=" clear__button__container col-lg-6 col-12 text-left ">
              <button className="clear__button">CLEAR</button>
            </div>
            <div className=" show__results__button__container col-lg-6 col-12 text-left">
              <button className="show__results__button">SHOW RESULTS</button>
            </div>
          </div>
          {/* <label htmlFor="" className="color__options">
            <input type="checkbox" name="" />
            ALL
          </label>
          <label htmlFor="" className="color__options">
            <input type="checkbox" name="" /> WHITE
          </label>
          <label htmlFor="" className="color__options">
            <input type="checkbox" name="" /> YELLOW
          </label> */}
        </form>
      </div>
    </div>
  );
}

export default Color;
