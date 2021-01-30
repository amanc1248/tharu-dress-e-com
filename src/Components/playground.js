// import React from "react";
// import "./Playground.css";

// const changePlayground = () => {
//   if (window.scrollY >= 63) {
//     var x = document.getElementsByClassName("playground");
//     // x.classList.add("playgroundFont");
//     x.innerHTML = "ooee";
//   } else {
//   }
// };

// window.addEventListener("scroll", changePlayground);

// export function AssignWork() {

//   return (
//     <div className="assign__work">
//       <form action="" id="assign__work__inputs">
//         <div className="assign__work__container">
//           <div className="assign__work__title">Assign Work</div>
//           <div className="assign__work__desc">Assign work to your employee</div>
//           <div className="assign__work__row">
//             <label htmlFor="">
//               Select Employee
//               <select name="" id="" className="select__employee__inputBox">
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//                 <option value="Sima Chaudhary">Sima Chaudhary</option>
//                 <option value="Bhara Chaudhary">Bhara Chaudhary</option>
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//                 <option value="Aman Chaudhary">Aman Chaudhary</option>
//               </select>
//             </label>
//           </div>
//           <div className="assign__work__row">
//             <label htmlFor="">
//               Select Order
//               <select name="" id="" className="select__employee__inputBox">
//                 <option value="Order 1">Order 1</option>
//                 <option value="Order 2">Order 2</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//                 <option value="Order 3">Order 3</option>
//               </select>
//             </label>
//           </div>
//           <div className="assign__work__row">
//             <button className="assignWorkSubmitButton">DONE</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      alert("You clicked outside of me!");
    }
  }

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};
