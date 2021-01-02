import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import Header from "./Header/Header";
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
import NavButton from "./NavButton";
import ProductIndividual from "./Components/Product Individual/ProductIndividual";
import SignInRegister from "./Components/Tailor/TailorSignInRegister/TailorSignInRegister";
import TailorHeader from "./Components/Tailor/TailorHeader/TailorHeader";
import Tailor from "./Components/Tailor/TailorStore/Tailor";
import TailorSignInRegister from "./Components/Tailor/TailorSignInRegister/TailorSignInRegister";
import EmployeeSignInRegister from "./Components/Employees/EmployeesSignInRegister/EmployeesSignInRegister";
import EmployeesStore from "./Components/Employees/EmployeesStore/EmployeesStore";
import EmployeeAndTailorRegister from "./Header/EmployeeAndTailorRegister";

function App() {
  return (
    <Router>
      <div className="App">
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
            <Footer></Footer>
          </Route>

          <Route path="/filterOptions">
            <div className="NavButton__Container">
              <NavButton></NavButton>
              <NavButton></NavButton>
              <NavButton></NavButton>
              <NavButton></NavButton>
            </div>
          </Route>
          <Route path="/employeeSignIn">
            <EmployeeAndTailorRegister></EmployeeAndTailorRegister>
            <EmployeeSignInRegister></EmployeeSignInRegister>
            <Footer></Footer>
          </Route>
          <Route path="/employeeStore">
            <TailorHeader></TailorHeader>
            <EmployeesStore></EmployeesStore>
          </Route>
          {/* Home Route👇 */}
          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
