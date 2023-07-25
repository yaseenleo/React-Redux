import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
