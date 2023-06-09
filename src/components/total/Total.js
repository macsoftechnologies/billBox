import React from "react";
import "../total/Total.css";

const Total = () => {
  return (
    <div>
      <div className="content6 container">
        <div>
          <div className="total">
            <p>Total Amount:</p>
            <input className="bar1" />
          </div>
          <div className="total">
            <p>Amount Paid:</p>
            <input className="bar1" />
          </div>
          <div className="total">
            <p>Dalivery Date:</p>
            <input type="date" className="bar2" />
          </div>
          <button className="buttn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Total;
