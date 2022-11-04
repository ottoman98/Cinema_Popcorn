import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import LayOut from "./components/LayOut";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <LayOut />
      </main>
    </div>
  );
}

export default App;
