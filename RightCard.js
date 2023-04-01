import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";

function LiveCard(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <br></br>
          <h3 className="card-title">Todays' Data</h3>
          <br></br>
          <p className="card-text">{time}</p>
          <br></br>
          <p>Today the price of Electricity is {props.Price} in the UK.</p>
          <br></br>
          <br></br>
          <Tabs />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="disclaimer">
            This infomation is accurate as of today and provided by ofgem.
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default LiveCard;
