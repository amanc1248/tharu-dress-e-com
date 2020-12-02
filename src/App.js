import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
import Footer from "./Footer/Footer";
import Men from "./Components/Category/Men/Men";
import Women from "./Components/Category/Women/Women";
import Kids from "./Components/Category/Kids/Kids";
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

          <Route path="/signin">
            <Header></Header>
            <Authentication></Authentication>
            <Footer></Footer>
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
