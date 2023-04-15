import React from "react";
import "../css/cart.css";
function Cart() {
  return (
    <div className="con6">
      <img src="/image/cover.png" alt="" className="spide" />
      <div className="hold4">
        <h1 className="he1">Spiderman Miles Morales</h1>
        <p className="pub">publishbbbb</p>
        <p className="star">8888</p>
        <div className="buttons">
          <button className="plus">+</button>
          <div className="num">1</div>
          <button className="minus">_</button>
        </div>
        <p className="sub">Subtotal</p>
        <p className="digit1">$58.00</p>
        <button className="signin">sign in</button>
      </div>
    </div>
  );
}
export default Cart;
