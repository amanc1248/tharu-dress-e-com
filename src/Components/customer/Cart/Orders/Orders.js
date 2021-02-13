import React from "react";
import { useDispatch } from "react-redux";
import { goToOrderDetails } from "../Account Details/Account Information/Redux/Actions";
import "./Orders.css";
import RedeemIcon from "@material-ui/icons/Redeem";
function Orders() {
  return (
    <div className="orders">
      <ParticulalrOrder></ParticulalrOrder>
      <ParticulalrOrder></ParticulalrOrder>
      <ParticulalrOrder></ParticulalrOrder>
      <ParticulalrOrder></ParticulalrOrder>
    </div>
  );
}

export default Orders;
// For the particular order
function ParticulalrOrder() {
  const dispatch = useDispatch();

  return (
    <div>
      {/* per order container */}
      <div className="per__order__container">
        {/* For managing the order row */}
        <div className="manage__order__row row no-gutters justify-content-between">
          <div className="order__number__placed col-8">
            <div>
              <span className="order__number__title">Order</span>
              <span
                className="order__number"
                onClick={() => dispatch(goToOrderDetails())}
              >
                #jasjdf879s
              </span>
            </div>
            <div className="order__placed">placed on 28 Nov 2020 09:44:40</div>
          </div>
          <div className="manage__order__container col-4">
            <span
              className="manage__order"
              onClick={() => dispatch(goToOrderDetails())}
            >
              Manage
            </span>
          </div>
        </div>
        <hr />
        {/* for showing the order */}
        <div className="order__show">
          <ParticularOrderPackage></ParticularOrderPackage>
          <ParticularOrderPackage></ParticularOrderPackage>
          <ParticularOrderPackage></ParticularOrderPackage>
        </div>
      </div>
    </div>
  );
}

// for the particular package
function ParticularOrderPackage() {
  return (
    <div className="product__details row no-gutters">
      <div className=" the__image__container col-lg-2 col-5 pl-2 pr-2">
        <img
          src="images/The gucci products men/639398_ZAF7Y_2066_001_100_0000_Light-Cotton-pant-with-Interlocking-G-patch.jpg"
          alt="authentication background"
          className="product__image"
        />
      </div>
      <div className="product__info__bag col-lg-8 col-7">
        <span>
          {" "}
          <strong>White Anchara with red boutique</strong>{" "}
        </span>
        <span>Item 12439thjvlxgl</span>
        <span>Full boutique</span>
        <span>Size 3 m</span>
        <span>Quantity 1</span>
      </div>
      {/* align items works only inside row */}
      <div className=" product__price__container col-lg-2  align-self-end">
        <div className="row justify-content-end container-fluid">
          <div className="col-2">
            <strong>$100.00</strong>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

// For the order details
export function ParticularOrderDetail() {
  return (
    <div className="particular__order_detail">
      <div className="particular__order__detail__container">
        {/* Part 1👇👇 */}
        <div className="particular__order__detail__part1">
          <div className="manage__order__row row no-gutters justify-content-between">
            <div className="order__number__placed col-8">
              <div>
                <span className="order__number__title">Order</span>
                <span className="order__number">#jasjdf879s</span>
              </div>
              <div className="order__placed">
                placed on 28 Nov 2020 09:44:40
              </div>
            </div>
            <div className="total__price col-4">
              <span className="">Total Rs. 995</span>
            </div>
          </div>
        </div>

        {/* Part 2👇👇 */}
        <ParticularPackage></ParticularPackage>
        <ParticularPackage></ParticularPackage>
        <ParticularPackage></ParticularPackage>

        {/* part 3👇👇  Order summary*/}
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
}
export function ParticularPackage() {
  return (
    <div className="particular__order__detail__part2">
      <span className="package__symbol">
        <RedeemIcon></RedeemIcon>
      </span>
      <span className="package__number">Package 1</span>
      <div className="delivered__date">Delivered on Oct 11 2020</div>
      <hr />
      <ParticularOrderPackage></ParticularOrderPackage>
    </div>
  );
}
export function OrderSummary() {
  return (
    <div className="order__summary row no-gutters">
      <div className="order__summary__part col-lg-4 col-md-4 col-sm-12">
        <div className="order__summary__part__container">
          <h6>SHIPPING ADDRES</h6>
          <p>Aman</p>
          <p>Biratnagar, Jute Mill</p>
          <p>3251145512</p>
        </div>
      </div>
      <div className="order__summary__part__middle col-lg-4 col-md-4 col-sm-12">
        <div className="order__summary__part__container">
          <h6>BILLING ADDRES</h6>
          <p>Aman</p>
          <p>Biratnagar, Jute Mill</p>
          <p>3251145512</p>
        </div>
      </div>
      <div className="order__summary__part col-lg-4 col-md-4 col-sm-12">
        <div className="order__summary__part__container">
          <h6>TOTAL SUMMARY</h6>
          <div className="sub__total row no-gutters justify-content-between">
            <div className="sub__total__title">Sub Total</div>
            <div className="sub__total__fee">Rs. 4523</div>
          </div>
          <div className="shipping__fee row no-gutters justify-content-between">
            <div className="shipping__fee__title">Shipping Fee</div>
            <div className="shipping__fee__fee">Rs. 88</div>
          </div>
          <hr />
          <div className="order__summary__total row no-gutters justify-content-between">
            <div className="order__summary__total__title">Total</div>
            <div className="order__summary__total__fee">Rs. 33333</div>
          </div>
          <div className="paid__by__means">Paid by cash on delivery</div>{" "}
        </div>
      </div>
    </div>
  );
}
