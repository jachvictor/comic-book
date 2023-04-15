import React from "react";
import "../css/cart.css";
function Cart() {
  return (
    <div className="con6">
      <img src="/image/cover.png" alt="" className="spide" />
      <div className="hold4">
        <h1 className="he1">Spiderman Miles Morales</h1>
        <p className="pub">Published April 23, 2023</p>
        <p className="star">5.0 rating</p>
        <div className="buttons">
          <button className="plus">+</button>
          <div className="num">1</div>
          <button className="minus">_</button>
        </div>
        <p className="digit1">$58.00</p>
        <button className="signin">sign in</button>
        <p className="sub">Subtotal</p>
      </div>
    </div>
  );
}
export default Cart;
