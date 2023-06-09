import React from "react";
import "../details/Details.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="content3 container">
        <div className="select" style={{ display: "flex" }}>
          <p>Select Item:</p>
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Materials
          </button>
          <div class="dropdown-menu">...</div>
        </div>
        <div>
          <p style={{ marginTop: "0rem" }}>Select Model:</p>
        </div>
        <div>
          <h5> Measurements</h5>
          <div className="photo">
            <p>Upload Photo:</p>
            <i class="fa fa-camera" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <p style={{ marginTop: "0rem", marginBottom: "0rem" }}>Enter Size:</p>
          <input className="size" />
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <div>
          <h5 style={{ marginBottom: "0rem" }}>Description</h5>
          <div className="record" style={{ marginTop: "0rem" }}>
            <p>Record Your Audio:</p>
            <i class="fa fa-microphone" aria-hidden="true"></i>
          </div>
          <textarea className="des" />
        </div>
        <footer>
          <h6 onClick={() => navigate("orderdetails")}>ADD ITEM</h6>
        </footer>
      </div>
    </div>
  );
};

export default Details;
