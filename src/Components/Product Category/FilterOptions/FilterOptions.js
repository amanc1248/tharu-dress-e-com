import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./FilterOptions.css";
import Color from "./FilterOptionColor";
import Design from "./FilterOptionDesign";
import Size from "./FilterOptionSize";
import Style from "./FilterOptionStyle";
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
          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="filter__options__container"
          >
            <div className="filter__options__button">
              {ourOption}
              <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
            </div>
            {isShown && (
              <div className="filter__options__content">
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
// {["Category", "Design", "Size", "Style"].map((ourOption) => {
//   const Component = components[ourOption];
//   return (
//     <div className="filter__options__container">
//       <div
//         onMouseEnter={() => setIsShown(true)}
//         onMouseLeave={() => setIsShown(false)}
//         className="filter__options__button"
//       >
//         {ourOption}
//         <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
//       </div>
//       {isShown && (
//         <div className="filter__options__content">
//           <Component />
//         </div>
//       )}
//     </div>
//   );
// })}
