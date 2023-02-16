import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <Button as="a" variant="primary">
          Button as link{" "}
        </Button>{" "}
        <Button as="a" variant="success">
          Button as link{" "}
        </Button>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
