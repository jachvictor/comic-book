import "./App.css";
import Home from "./compoonents/homepage";
import Data from "./compoonents/data";
import { Products } from "./compoonents/homepage";
import Pay from "./compoonents/payment";
import { Check } from "./compoonents/payment";
import { Confirm } from "./compoonents/payment";
import { Display } from "./compoonents/payment";
import Cart from "./compoonents/cartpage";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <nav className="nav1">
          <img className="logo" src="/image/newicon.png" />
          <div className="hold1">
            <p className="head p1">Home</p>
            <p className="head p2">Categories</p>
            <p className="head p3">Faqs</p>
          </div>
          <img src="/image/cart.png" className="cart" />
          <input className="search" type="text" placeholder="search" />
          <button className="signup">sign up</button>
        </nav>
        <section className="sec2">
          <Cart/>
          {/* <Home /> */}
          {/* <Pay/> */}
          {/* <Check /> */}
          {/* <Confirm/> */}
          {/* <Display/> */}
        </section>
      </div>
    </div>
  );
}

export default App;
