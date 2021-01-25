import React from "react";
import "./Playground.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
import { Button, Modal } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";

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
export function PlaygroundField() {
  return (
    <div className="playground">
      <div className="see__more__container">{seeMoreOptions}</div>
    </div>
  );
}
// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-hright"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function ModalApp() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default ModalApp;

export function AddProduct() {
  let newProductLengthOptions = ["3.5", "4", "4.5", "5", "5.5"];
  let newProductWidthOptions = ["3.5", "4", "4.5", "5", "5.5"];
  let newProductLengthOption = newProductLengthOptions.map((obj) => {
    return (
      <NewProductLength
        key={obj.toString()}
        checkBoxText={obj}
      ></NewProductLength>
    );
  });
  let newProductWidthOption = newProductWidthOptions.map((obj) => {
    return (
      <NewProductLength
        key={obj.toString()}
        checkBoxText={obj}
      ></NewProductLength>
    );
  });
  function NewProductLength({ checkBoxText }) {
    return (
      <div className="new__product__length">
        <Checkbox></Checkbox>
        <small>{checkBoxText}</small>
      </div>
    );
  }
  return (
    <div className="add__product">
      <div className="new__product__title">
        <div className="the__title">New Product</div>
        <p>Add information of the new product</p>
      </div>

      <form action="" id="new__product__inputs">
        <div className="new__product__row">
          <div className="new__product__container">
            <label htmlFor="">
              Product Title
              <input type="text" className="new__product__inputBox" />
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="new__product__container">
            <label htmlFor="">
              Regular Price
              <input type="number" className="new__product__inputBox" />
            </label>
          </div>
          <div className="new__product__container">
            <label htmlFor="">
              Sale Price
              <input type="number" className="new__product__inputBox" />
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="new__product__container">
            <label htmlFor="">
              Stock
              <input type="number" className="new__product__inputBox" />
            </label>
          </div>
          <div className="new__product__container">
            <label htmlFor="">
              SKU
              <input type="number" className="new__product__inputBox" />
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="new__product__container">
            <label htmlFor="">
              Category
              <select name="" id="" className="new__product__inputBox">
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </label>
          </div>
          <div className="new__product__container">
            <label htmlFor="">
              Color
              <select name="" id="" className="new__product__inputBox">
                <option value="Men">Green</option>
                <option value="Women">White</option>
                <option value="Kids">Yellow</option>
              </select>
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="new__product__container">
            <label htmlFor="">
              Style
              <select name="" id="" className="new__product__inputBox">
                <option value="Flowers">Flowers</option>
                <option value="Full Boutique">Full Boutique</option>
                <option value="Plain">Plain</option>
              </select>
            </label>
          </div>
          <div className="new__product__container">
            <label htmlFor="">
              Design
              <select name="" id="" className="new__product__inputBox">
                <option value="Flowers">Flowers</option>
                <option value="Text">Text</option>
              </select>
            </label>
          </div>
        </div>

        {/* for setting the size options */}
        <div className="new__product__size">
          <p>Size</p>
          <small>Length m</small>
          <div className="new__product__lenth__options">
            {newProductLengthOption}
          </div>
          <p>
            <small>Width m</small>
            <div className="new__product__width__options">
              {newProductWidthOption}
            </div>
          </p>
        </div>
        <div className="new__product__row">
          <div className="product__cloth__desc">
            <label htmlFor="">
              Product Description
              <textarea
                name="Text1"
                cols="40"
                rows="5"
                className="new__product__inputBox"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="product__cloth__desc">
            <label htmlFor="">
              Cloth Description
              <textarea
                name="Text1"
                cols="40"
                rows="5"
                className="new__product__inputBox"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="new__product__row">
          <div className="product__image__upload">
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              placeholder="choose image"
              className="new__product__inputBox"
            ></input>
          </div>
        </div>
        <div className="new__product__row">
          <button className="newProductSubmitButton">DONE</button>
        </div>
      </form>
    </div>
  );
}

export function AssignWork() {
  return (
    <div className="assign__work">
      <form action="" id="assign__work__inputs">
        <div className="assign__work__container">
          <div className="assign__work__title">Assign Work</div>
          <div className="assign__work__desc">Assign work to your employee</div>
          <div className="assign__work__row">
            <label htmlFor="">
              Select Employee
              <select name="" id="" className="select__employee__inputBox">
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Sima Chaudhary">Sima Chaudhary</option>
                <option value="Bhara Chaudhary">Bhara Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
              </select>
            </label>
          </div>
          <div className="assign__work__row">
            <label htmlFor="">
              Select Order
              <select name="" id="" className="select__employee__inputBox">
                <option value="Order 1">Order 1</option>
                <option value="Order 2">Order 2</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
              </select>
            </label>
          </div>
          <div className="assign__work__row">
            <button className="assignWorkSubmitButton">DONE</button>
          </div>
        </div>
      </form>
    </div>
  );
}
