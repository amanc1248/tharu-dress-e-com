import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Authentication Route */}

          <Route path="/signin">
            <Header></Header>
            <Authentication></Authentication>
          </Route>
          {/* Home Route👇 */}
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
