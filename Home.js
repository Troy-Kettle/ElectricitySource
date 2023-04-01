import React from "react";
import UK from "./UK.png";
import LeftBar from "./LeftBar";
import LiveCard from "./RightCard";
import Footer from "./Footer";


export default function Home() {
  return (
    <>
    <div className="row">
      <br></br>
    </div>
      <div className="row">
        <div className="column">
          <LeftBar />
        </div>
        <div className="column">
          <div className="UK">
            <img className="UK" src={UK} alt="UK" />
          </div>
        </div>
        <div className="column" id="RightCol">
          <LiveCard Price="42p p/kWh" />
        </div>
      </div>
      <div className="row">
        <br></br>
      </div>
      <div className="row">
        <Footer />
      </div>
    </>
  );
}
