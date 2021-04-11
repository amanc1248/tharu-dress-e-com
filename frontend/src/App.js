import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/customer/Footer/Footer";
import FooterFAQs from "./Components/customer/Footer/FooterFAQs/FooterFAQs";
import AboutDasa from "./Components/customer/Footer/TheCompany/TheCompany";
import Header from "./Components/customer/Header";
import ImageWithTitle from "./Components/ImageWithTitle";

import CustomerHomeScreen from "./Screens/customer/CustomerHomeScreen";
import CustomerSignInScreen from "./Screens/customer/CustomerSignInScreen";
import CustomerWomenScreen from "./Screens/customer/CustomerWomenScreen";
import CustomerKidsScreen from "./Screens/customer/CustomerKidsScreen";
import CustomerMenScreen from "./Screens/customer/CustomerMenScreen";
import CustomerProductsScreen from "./Screens/customer/CustomerProductsScreen";
import CustomerCartScreen from "./Screens/customer/CustomerCartScreens/CustomerCartScreen";
import CustomerProductScreen from "./Screens/customer/CustomerProductScreen";
import TailorSignInScreen from "./Screens/tailor/TailorSignInScreen";
import TailorScreen from "./Screens/tailor/TailorScreen";
import EmployeeSignInScreen from "./Screens/employee/EmployeeSignInScreen";
import EmployeeScreen from "./Screens/employee/EmployeeScreen";
import CustomerCheckOutScreen from "./Screens/customer/CustomerCheckOutScreen";
import CustomerDetailsScreen from "./Screens/customer/CustomerDetailsScreen";
import EmployeeDetailsScreen from "./Screens/employee/EmployeeDetailsScreen";
import AdminScreen from "./Screens/admin/AdminScreen";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            {/* Category section 👇*/}
            <Route path="/men">
              <Header></Header>
              <CustomerMenScreen></CustomerMenScreen>
              <Footer></Footer>
            </Route>
            <Route path="/women">
              <Header></Header>
              <CustomerWomenScreen></CustomerWomenScreen>
              <Footer></Footer>
            </Route>
            <Route path="/kids">
              <Header></Header>
              <CustomerKidsScreen></CustomerKidsScreen>
              <Footer></Footer>
            </Route>

            {/* Product category section👇 */}
            <Route path="/MenCategory">
              <CustomerProductsScreen></CustomerProductsScreen>
            </Route>
            <Route path="/WomenCategory">
              <CustomerProductsScreen></CustomerProductsScreen>
            </Route>
            <Route path="/KidCategory">
              <CustomerProductsScreen></CustomerProductsScreen>
            </Route>

            {/* customer signin 👇 */}
            <Route path="/signin">
              <Header></Header>
              <CustomerSignInScreen></CustomerSignInScreen>
              <Footer></Footer>
            </Route>

            <Route path="/cart">
              <Header></Header>
              <CustomerCartScreen></CustomerCartScreen>
              <Footer></Footer>
            </Route>
            <Route path="/productIndividual">
              <Header></Header>
              <CustomerProductScreen></CustomerProductScreen>
              <Footer></Footer>
            </Route>
            <Route path="/tailorSignIn">
              <ImageWithTitle theTitle="CREATE A TAILOR ACCOUNT"></ImageWithTitle>
              <TailorSignInScreen></TailorSignInScreen>
              <Footer></Footer>
            </Route>
            <Route path="/tailorAccount">
              <TailorScreen></TailorScreen>
            </Route>

            <Route path="/employeeSignIn">
              <ImageWithTitle theTitle="CREATE AN EMPLOYEE ACCOUNT"></ImageWithTitle>
              <EmployeeSignInScreen></EmployeeSignInScreen>
              <Footer></Footer>
            </Route>

            <Route path="/employeeAccount">
              <ImageWithTitle theTitle="EMPLOYEE ACCOUNT"></ImageWithTitle>

              <EmployeeScreen></EmployeeScreen>
            </Route>

            <Route path="/checkOut">
              <Header></Header>
              <ImageWithTitle theTitle="CHECKOUT"></ImageWithTitle>
              <CustomerCheckOutScreen></CustomerCheckOutScreen>
            </Route>

            <Route path="/orderDetails">
              {/* <OrdersDetails></OrdersDetails> */}
            </Route>
            <Route path="/customerDetails">
              <CustomerDetailsScreen></CustomerDetailsScreen>
            </Route>
            <Route path="/employeeDetails">
              <EmployeeDetailsScreen></EmployeeDetailsScreen>
            </Route>
            <Route path="/faqs">
              <Header></Header>
              <FooterFAQs></FooterFAQs>
              <Footer></Footer>
            </Route>
            <Route path="/aboutus">
              <Header></Header>
              <AboutDasa></AboutDasa>
              <Footer></Footer>
            </Route>

            {/* Admin routes👇 */}
            <Route path="/admin">
              <AdminScreen></AdminScreen>
            </Route>
            {/* Home Route👇 */}
            <Route path="/">
              <Header></Header>
              <CustomerHomeScreen></CustomerHomeScreen>
              <Footer></Footer>
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
