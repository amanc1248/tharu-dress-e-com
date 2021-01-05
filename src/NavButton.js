import React, { useState } from "react";
import "./NavButton.css";
function NavButton() {
  const [isShown, setisShown] = useState(false);
  return (
    <div className="NavButton">
      <div className="category__buttons">
        <div className="NavButton__Button" onClick={() => setisShown(true)}>
          Category
        </div>
        <div className="NavButton__Button" onClick={() => setisShown(true)}>
          Color
        </div>
        <div className="NavButton__Button" onClick={() => setisShown(true)}>
          Design
        </div>
        <div className="NavButton__Button" onClick={() => setisShown(true)}>
          Price
        </div>
      </div>
      {isShown && (
        <div className="dropDown__container">
          <div className="NavButton__Dropdown">
            <button onClick={() => setisShown(false)}>close</button>
            Dropdown
          </div>
        </div>
      )}
    </div>
  );
}

export default NavButton;
