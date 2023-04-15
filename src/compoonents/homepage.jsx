import React, { useState } from "react";
import "../css/home.css";

function Home() {
  return (
    <div>
      <main className="contain2">
        <div className="wrap">
          <img className="back" src="/b1.pn" alt="" />
          <h1 className="header">
            Experience adventure, <br /> Humor and Drama
          </h1>
          <p className="des">
            Unleash Your Inner Hero With <br /> Every Page Turn
          </p>

          <button className="exp">Explore</button>
        </div>

        <section className="top">
          <div className="con">
            <img src="/b1.png" alt="" className="list" />
            <img src="/b1.png" alt="" className="list" />
            <img src="/b1.png" alt="" className="list" />
            <img src="/b1.png" alt="" className="list" />
            <img src="/b1.png" alt="" className="list" />
          </div>
        </section>
        <section className="bsell">
          <p className="head1">best selling comics</p>
          <ul className="hlist" typeof="none">
            <p className="blist">Spiderman</p>
            <p className="blist">Batman</p>
            <p className="blist">Avengers</p>
            <p className="blist">X-men</p>
            <p className="blist">Wonderwoman</p>
          </ul>
          <button className="see">see more</button>
        </section>
        <section className="late">
          <h2 className="head2">latest comics</h2>
        </section>
      </main>
    </div>
  );
}

export default Home;
