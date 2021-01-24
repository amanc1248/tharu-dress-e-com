import React from "react";
import "./Playground.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
const changePlayground = () => {
  if (window.scrollY >= 63) {
    var x = document.getElementsByClassName("playground");
    // x.classList.add("playgroundFont");
    x.innerHTML = "ooee";
  } else {
  }
};

window.addEventListener("scroll", changePlayground);
let seeMoreOptionsList = [
  { icon: <VisibilityIcon></VisibilityIcon>, iconText: "Order Details" },
  {
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    iconText: "Employee Details",
  },
  { icon: <PersonIcon></PersonIcon>, iconText: "Customer Details" },
  {
    icon: <LocalShippingIcon></LocalShippingIcon>,
    iconText: "Mark as delivered",
  },
  { icon: <CheckBoxIcon></CheckBoxIcon>, iconText: "Mark as paid" },
  { icon: <DescriptionIcon></DescriptionIcon>, iconText: "Send Invoice" },
];
let seeMoreOptions = seeMoreOptionsList.map((obj) => {
  return (
    <SeeMoreIndividual
      key={obj.toString()}
      theIcon={obj.icon}
      theIconText={obj.iconText}
    >
      {" "}
    </SeeMoreIndividual>
  );
});
function SeeMoreIndividual({ theIcon, theIconText }) {
  return (
    <div className="see__more__individual__container">
      <div className="see__more__icon">{theIcon}</div>
      <div className="see__more__text">{theIconText}</div>
    </div>
  );
}
function PlaygroundField() {
  return (
    <div className="playground">
      <div className="see__more__container">{seeMoreOptions}</div>
    </div>
  );
}

export default PlaygroundField;
