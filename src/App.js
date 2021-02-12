import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import Header, { SearchBar } from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
import Footer from "./Footer/Footer";
import Men from "./Components/Category/Men/Men";
import Women from "./Components/Category/Women/Women";
import Kids from "./Components/Category/Kids/Kids";
import MenProduct from "./Components/Product Category/Men Product/MenProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WomenProduct from "./Components/Product Category/Women Product/WomenProduct";
import KidsProduct from "./Components/Product Category/Kids Product/KidsProduct";
import Cart from "./Components/Cart/Cart";
import ProductIndividual from "./Components/Product Individual/ProductIndividual";
import SignInRegister from "./Components/Tailor/TailorSignInRegister/TailorSignInRegister";
import TailorHeader from "./Components/Tailor/TailorHeader/TailorHeader";
import Tailor from "./Components/Tailor/TailorStore/Tailor";
import EmployeeSignInRegister from "./Components/Employees/EmployeesSignInRegister/EmployeesSignInRegister";
import EmployeesStore from "./Components/Employees/EmployeesStore/EmployeesStore";
import EmployeeAndTailorRegister from "./Header/EmployeeAndTailorRegister";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import OutsideAlerter from "./Components/playground";
import FooterFAQs from "./Footer/FooterFAQs/FooterFAQs";
import AboutDasa from "./Footer/TheCompany/TheCompany";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import CustomerDetails from "./Components/DetailsPage/CustomerDetails";
import OrdersDetails from "./Components/DetailsPage/OrdersDetails";
import EmployeeDetails from "./Components/DetailsPage/EmployeeDetails";
import CustomerCheckout from "./Components/CustomerCheckout/CustomerCheckout";

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
              <Authentication></Authentication>
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
              <EmployeeAndTailorRegister></EmployeeAndTailorRegister>
              <SignInRegister></SignInRegister>
              <Footer></Footer>
            </Route>
            <Route path="/tailorAccount">
              <TailorHeader></TailorHeader>
              <Tailor></Tailor>
            </Route>
            <Route path="/filterOptions">
              <SearchBar></SearchBar>
              {/* <div className="NavButton__Container">
                <NavButton></NavButton>
              </div> */}
            </Route>
            <Route path="/employeeSignIn">
              <EmployeeAndTailorRegister></EmployeeAndTailorRegister>
              <EmployeeSignInRegister></EmployeeSignInRegister>
              <Footer></Footer>
            </Route>
            <Route path="/playground">
              {/* <PlaygroundField></PlaygroundField> */}
              {/* <ModalApp></ModalApp> */}
              <OutsideAlerter></OutsideAlerter>
            </Route>
            <Route path="/employeeAccount">
              <TailorHeader></TailorHeader>
              <EmployeesStore></EmployeesStore>
            </Route>
            <Route path="/checkOut">
              <TailorHeader></TailorHeader>
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
