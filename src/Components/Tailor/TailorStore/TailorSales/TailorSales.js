import React from "react";
import "./TailorSales.css";
function TailorSales() {
  return (
    <div className="tailor__sales">
      <div className="tailor__products__heading">
        <h5 className="tailor__tabs__title">DASHBOARD</h5>
      </div>
      <div className="tailor__sales__container">
        <div className="total__sales">
          <h4>Total Sales</h4>
          <h2>Rs. 75000</h2>
        </div>
        <div className="total__sales__last__month">
          Rs. 15,000 in last month
        </div>
        <div className="total__sales__this__month__current">
          <strong>This month so far</strong>
          <h1>Rs. 5,000</h1>
        </div>
      </div>
    </div>
  );
}

export default TailorSales;
