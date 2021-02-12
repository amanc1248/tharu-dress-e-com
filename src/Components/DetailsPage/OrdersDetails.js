import React from "react";
import { ParticularOrderDetail } from "../Cart/Orders/Orders";
import DetailsPage from "./DetailsPage";

function OrdersDetails() {
  return (
    <div className="order__details">
      <DetailsPage
        title="ORDER DETAILS"
        detailName="743ukdf02ufd order details"
      ></DetailsPage>
      <ParticularOrderDetail></ParticularOrderDetail>
    </div>
  );
}

export default OrdersDetails;
