import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Authentication></Authentication>
    </div>
  );
}

export default App;
