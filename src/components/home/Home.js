import { useNavigate } from "react-router-dom";
import React from "react";
import "../home/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title1">
        <h1> Bill Box</h1>
      </div>
      <div className="container content1">
        <div className="row">
          <button className="col button" onClick={() => navigate("customer")}>
            BILL
          </button>
          <button className="col button">BILL STATUS</button>
          <div className="w-100"></div>
          <button className="col button">DESIGNS</button>
          <button className="col button">REPORT</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
