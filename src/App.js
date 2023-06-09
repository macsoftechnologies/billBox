import Home from "./components/home/Home";
import Customer from "./components/customer/Customer";
import Order from "./components/order/Order";
import Details from "./components/details/Details";
import Orderds from "./components/orderdetails/Orderds";
import Total from "./components/total/Total";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customer/order" element={<Order />} />
        <Route path="/customer/order/details" element={<Details />} />
        <Route
          path="/customer/order/details/orderdetails"
          element={<Orderds />}
        />
        <Route
          path="/customer/order/details/orderdetails/submission"
          element={<Total />}
        />
      </Routes>
    </BrowserRouter>
    // <Order />
  );
}

export default App;
