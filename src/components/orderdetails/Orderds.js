import React from "react";
import { useNavigate } from "react-router-dom";
import "../orderdetails/Orderds.css";

const Orderds = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="title2">
          <h1 className="cus"> Order Details</h1>
        </div>
        <div className="content5 container">
          <div className="shadow p-4 mb-7 bg-white rounded">
            <div>
              <img src="/images/Jacket.png" alt="..." className="ima1" />
            </div>
            <div>
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Item Name:Blouse
              </p>
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Measurements
              </p>
              <textarea />
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Description
              </p>
              <textarea />
              <i
                class="fa fa-play"
                aria-hidden="true"
                style={{ marginTop: "0rem" }}
              ></i>
            </div>
          </div>
          <div class="shadow1 p-4 mb-7 bg-white rounded">
            <div>
              <img src="/images/Jacket.png" alt="..." className="ima1" />
            </div>
            <div>
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Item Name:Blouse
              </p>
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Measurements
              </p>
              <textarea />
              <p
                style={{
                  marginTop: "0rem",
                  marginBottom: "0rem",
                  fontSize: "12px",
                }}
              >
                Description
              </p>
              <textarea />
              <i
                className="fa fa-play"
                aria-hidden="true"
                style={{ marginTop: "0rem" }}
              ></i>
            </div>
            <footer>
              <a className="end" onClick={() => navigate("submission")}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>ADD Item
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderds;
