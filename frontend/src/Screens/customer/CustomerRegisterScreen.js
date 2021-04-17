import { withRouter } from "react-router";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../Components/customer/Header";
import Footer from "../../Components/customer/Footer/Footer";
import ImageWithTitle from "../../Components/ImageWithTitle";

function CustomerRegisterScreen() {
  return (
    <>
      <Header></Header>
      <div className="authentication">
        <ImageWithTitle theTitle="CREATE DASA ACCOUNT"></ImageWithTitle>
        <div className=" login__signup row container-fluid p-0 m-0  ">
          <div className="signup col-lg-6 col-md-6 p-0">
            <div className="signup__container">
              <div className="title__subtitle">
                <h4>REGISTER</h4>
                <p className="subtitle">
                  Please register below to create an account
                </p>
              </div>
              <form action="">
                <div className="register__inputs">
                  <label>
                    First Name
                    <input type="text" />
                  </label>

                  <label>
                    Last Name
                    <input type="text" />
                  </label>

                  <label>
                    Email
                    <input type="email" />
                  </label>

                  <label>
                    Phone
                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                  </label>

                  <label>
                    Password
                    <input type="password" />
                  </label>

                  <label>
                    Confirm Password
                    <input type="password" />
                  </label>
                </div>
                <div className="signup__form__footer ">
                  <div className="security__text">
                    <Checkbox></Checkbox>
                    <small>
                      Subscribe to receive email updates about Daasaa
                      productsemail updates about Daasaa products, services and
                      events.{" "}
                    </small>
                  </div>
                  <div className="row justify-content-end no-gutters">
                    <Link to="/cart">
                      <button className="register__button ">Register</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default withRouter(CustomerRegisterScreen);
