import "./App.css";
import Home from "./compoonents/homepage";
import Data from "./compoonents/data";
import { Products } from "./compoonents/homepage";
import Pay from "./compoonents/payment";
import { Check } from "./compoonents/payment";
import { Confirm } from "./compoonents/payment";
import { Display } from "./compoonents/payment";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <nav className="nav1">
          <img className="logo" src="/logo.png" />
          <div className="hold1">
            <p className="head p1">Home</p>
            <p className="head p2">Gallery</p>
            <p className="head p3">Faqs</p>
          </div>
          <input className="search" type="text" placeholder="search" />
          <button className="signup">sign up</button>
        </nav>
        <section className="sec2">
          {/* <Home /> */}
          {/* <Pay/> */}
          <Check/>
          {/* <Confirm/> */}
          {/* <Display/> */}
        </section>
      </div>
    </div>
  );
}

export default App;
