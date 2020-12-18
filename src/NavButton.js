import React, { useState } from "react";
import "./NavButton.css";
function NavButton() {
  const [isShown, setisShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setisShown(true)}
      onMouseLeave={() => setisShown(false)}
      className="NavButton"
    >
      <div className="NavButton__Button">Home</div>
      {isShown && (
        <div className="dropDown__container">
          <div className="NavButton__Dropdown">Dropdown</div>
        </div>
      )}
    </div>
  );
}

export default NavButton;
