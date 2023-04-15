import React, { useState } from "react";
import "../css/pay.css";
import "../css/check.css";
import "../css/confirm.css";

export function Display() {
  const [page, setPage] = useState("q");
  return (
    <div>
      {page === "q" && <Check setPage={setPage} />}
      {page === "w" && <Pay setPage={setPage} />}
    </div>
  );
}
function Pay() {
  const [page, setPage] = useState("");
  return (
    <div className="con3">
      <div className="forimg">
        {/* <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          checkout
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          payment
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          confirmation
        </p> */}
        <img src="/image/frame2.png" alt="" className="up" />
      </div>
      <h1 className="payhead1">Payment Method</h1>
      <div className="type">
        {/* <img src="/image/type.png" alt="" className="typi" /> */}
        <input type="checkbox" className="cc" />{" "}
        <img src="/image/card.png" alt="" className=" tick card" />
        <input type="checkbox" className="cw" />
        <img src="/image/wallet.png" alt="" className=" tick wallet" />
        <input type="checkbox" className="cp" />
        <img src="/image/paypal.png" alt="" className=" tick paypal" />
      </div>
      <h1 className="payhead2">Payment Details</h1>
      <div className="form">
        <form action="" className="pay input">
          <input
            type="text
                        "
            className="name input"
            placeholder="Enter Name On Card"
          />
          <input
            type="number
                        "
            className="name input"
            placeholder="card number"
          />
          <input
            type="
                        "
            className="name inputl"
            placeholder="expiration Date"
          />
          <input
            type="
                        "
            className="name inputr"
            placeholder="CVV"
          />
        </form>

        <p className="down">
          by clicking "confirm payment"i agreeing to the company's terms of
          services
        </p>
        <button onClick={() => setPage("q")} className="propay">
          Proceed Payment
        </button>
      </div>
      <img src="image/splash.png" alt="" className="splash" />
      <img src="/image/about.png" alt="" className="check" />
      <img src="/image/coverh.png" alt="" className="adv" />
      {page === "q" && <Confirm />}
    </div>
  );
}
export default Pay;
export function Check() {
  const [page, setPage] = useState("");
  return (
    <div className="con4">
      <div className="forimg">
        {/* <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          checkout
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          payment
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          confirmation
        </p> */}
        <img src="/image/frame1.png" alt="" className="up" />
      </div>
      <img src="/image/cover.png" alt="" className="icon2" />
      <div className="detail">
        <h1 className="head3">SpiderMan Miles Morales</h1>
        <div className="break2"></div>
        <div className="break3"></div>
        <input type="text" className="aply" placeholder="Enter Coupon Code" />
        <button className="apply">Apply</button>
        <div className="hold2">
          <ul typeof="block" className="listdel">
            <p className="del l1">Subtotal</p>
            <p className="del l2">Yart</p>
          </ul>
          <ul className="listdigi">
            <p className="digit l3">$58.00</p>
            <p className="digit l4">$00.00</p>
          </ul>

          <p className="del l5">Total</p>
          <p className="digit l6">$58.00</p>
        </div>
      </div>
      <button onClick={() => setPage("w")} className="next">
        Proceed To Payment
      </button>
      {page === "w" && <Pay />}
    </div>
  );
}
export function Confirm() {
  return (
    <div className="con5">
      <div className="forimg">
        {/* <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          checkout
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          payment
        </p>
        <div className="break"></div>
        <p className="picon">
          <img src="/b1.png" alt="" className="icon" />
          confirmation
        </p> */}
        <img src="/image/frame3.png" alt="" className="up" />
      </div>
      <main className="contain">
        <img src="/image/per.png" alt="" className="icon3" />
        <h1 className="head4">Payment Successful</h1>
        <p className="q1">You have Successful purchased your book</p>
        <p className="q2">
          We've sent a confirmation email
          <em className="e"> Team@genesystechhub</em>
        </p>
        <button className="view">View Book</button>
      </main>
    </div>
  );
}
