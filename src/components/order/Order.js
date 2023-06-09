import { useNavigate } from "react-router-dom";
import React from "react";
import "./Order.css";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title2">
        <h1 className="cus"> Order Details</h1>
      </div>
      <div className="content2">
        <hi className="add" onClick={() => navigate("details")}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
          <span style={{ fontFamily: "bold" }}>ADD ITEM</span>
        </hi>
      </div>
    </div>
  );
};

export default Order;
