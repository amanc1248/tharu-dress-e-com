import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./adapters/ScrollToTop/ScrollToTop";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Cart from "./Components/customer/Cart/Cart";
import Kids from "./Components/customer/Category/Kids/Kids";
import Men from "./Components/customer/Category/Men/Men";
import Women from "./Components/customer/Category/Women/Women";
import CustomerCheckout from "./Components/customer/CustomerCheckout/CustomerCheckout";
import CustomerLoginSignup from "./Components/customer/CustomerLoginSignup/CustomerLoginSignup";
import Footer from "./Components/customer/Footer/Footer";
import FooterFAQs from "./Components/customer/Footer/FooterFAQs/FooterFAQs";
import AboutDasa from "./Components/customer/Footer/TheCompany/TheCompany";
import Header, { SearchBar } from "./Components/customer/Header/Header";
import Home from "./Components/customer/Home Page/Home";
import KidsProduct from "./Components/customer/Product Category/Kids Product/KidsProduct";
import MenProduct from "./Components/customer/Product Category/Men Product/MenProduct";
import WomenProduct from "./Components/customer/Product Category/Women Product/WomenProduct";
import ProductIndividual from "./Components/customer/Product Individual/ProductIndividual";
import CustomerDetails from "./Components/DetailsPage/CustomerDetails";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import EmployeeDetails from "./Components/DetailsPage/EmployeeDetails";
import OrdersDetails from "./Components/DetailsPage/OrdersDetails";
import EmployeeSignInRegister from "./Components/Employees/EmployeesSignInRegister/EmployeesSignInRegister";
import EmployeesStore from "./Components/Employees/EmployeesStore/EmployeesStore";
import ImageWithTitle from "./Components/Global/ImageWithTitle";
import TailorHeader from "./Components/Tailor/TailorHeader/TailorHeader";
import SignInRegister from "./Components/Tailor/TailorSignInRegister/TailorSignInRegister";
import Tailor from "./Components/Tailor/TailorStore/Tailor";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            {/* Men Category Route  */}
            <Route path="/men">
              <Header></Header>
              <Men></Men>
              <Footer></Footer>
            </Route>

            {/* Women Category Route  */}
            <Route path="/women">
              <Header></Header>
              <Women></Women>
              <Footer></Footer>
            </Route>
            {/* Women Category Route  */}
            <Route path="/kids">
              <Header></Header>
              <Kids></Kids>
              <Footer></Footer>
            </Route>
            {/* Authentication Route */}

            <Route path="/MenCategory">
              <MenProduct></MenProduct>
            </Route>
            <Route path="/WomenCategory">
              <WomenProduct></WomenProduct>
            </Route>
            <Route path="/KidCategory">
              <KidsProduct></KidsProduct>
            </Route>
            <Route path="/signin">
              <Header></Header>
              <CustomerLoginSignup></CustomerLoginSignup>
              <Footer></Footer>
            </Route>
            <Route path="/cart">
              <Header></Header>
              <Cart></Cart>
              <Footer></Footer>
            </Route>
            <Route path="/productIndividual">
              <Header></Header>
              <ProductIndividual></ProductIndividual>
              <Footer></Footer>
            </Route>
            <Route path="/tailorSignIn">
              <ImageWithTitle theTitle="CREATE A TAILOR ACCOUNT"></ImageWithTitle>
              <SignInRegister></SignInRegister>
              <Footer></Footer>
            </Route>
            <Route path="/tailorAccount">
              <ImageWithTitle theTitle="TAILOR ACCOUNT"></ImageWithTitle>

              <Tailor></Tailor>
            </Route>
            <Route path="/filterOptions">
              <SearchBar></SearchBar>
              {/* <div className="NavButton__Container">
                <NavButton></NavButton>
              </div> */}
            </Route>
            <Route path="/employeeSignIn">
              <ImageWithTitle theTitle="CREATE AN EMPLOYEE ACCOUNT"></ImageWithTitle>
              <EmployeeSignInRegister></EmployeeSignInRegister>
              <Footer></Footer>
            </Route>
            <Route path="/playground"></Route>
            <Route path="/employeeAccount">
              <ImageWithTitle theTitle="EMPLOYEE ACCOUNT"></ImageWithTitle>

              <EmployeesStore></EmployeesStore>
            </Route>
            <Route path="/checkOut">
              <Header></Header>
              <ImageWithTitle theTitle="CHECKOUT"></ImageWithTitle>
              <CustomerCheckout></CustomerCheckout>
            </Route>
            <Route path="/detailsPage">
              <DetailsPage
                title="Customer Details"
                detailName="Soni Chaudhary's Detail"
              ></DetailsPage>
            </Route>
            <Route path="/orderDetails">
              <OrdersDetails></OrdersDetails>
            </Route>
            <Route path="/customerDetails">
              <CustomerDetails></CustomerDetails>
            </Route>
            <Route path="/employeeDetails">
              <EmployeeDetails></EmployeeDetails>
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
              <Admin></Admin>
            </Route>
            {/* Home Route👇 */}
            <Route path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
