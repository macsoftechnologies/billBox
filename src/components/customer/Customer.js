import React from "react";
import "../customer/Customer.css";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
  const clickFunction = () => {
    navigate("order")
  }
  return (
    <div>
      <div className="title">
        <h1 className="cus">Customer Details</h1>
      </div>
      <div className="content container">
        <div className="info container">
          <div className="bill">
            <img src="/images/bills.png" alt="..." className="ima" />
            <p>Bill Number</p>
          </div>
          <input className="bar"/>
          <div className="bill">
            <img src="/images/contact.png" alt="..." className="ima" />
            <p>Name</p>
          </div>
          <input className="bar"/>
          <div className="bill">
            <img src="/images/landline.png" alt="..." className="ima" />
            <p>Phone Number</p>
          </div>
          <input className="bar"/>
          <footer>
            <div className="next" onClick={clickFunction}>
              <p className="ne">Next</p>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Customer;
