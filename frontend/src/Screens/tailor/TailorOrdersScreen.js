import React, { useEffect } from "react";
import "../../styles/tailor/TailorOrdersScreen.css";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import { tailorOrdersAction } from "../../actions/tailorActions";
import Loader from "../../Components/Loader";
function TailorOrdersScreen({ history }) {
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  const tailorOrders = useSelector((state) => state.tailorOrders);
  const tableStatus = (
    <div className="table__status__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Delivered</div>
    </div>
  );
  const tableStatusNotDeliverd = (
    <div className="table__status__notDelivered__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Not Delivered</div>
    </div>
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailorId;
      dispatch(tailorOrdersAction(tailId));
    } else {
      history.push("/tailorSignin");
    }
  }, [dispatch, tailorInfo, history]);
  // const tableRow = (
  const { loading, error, orders } = tailorOrders;
  // orders = tai
  const theOrders = tailorOrders && tailorOrders.orders;

  // );
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__order">
      <div className="tailor__heading row no-gutters">
        <div className="tailor__heading__part1 col-lg-6 col-md-6 col-12">
          {" "}
          <h5 className="tailor__tabs__title">ORDERS</h5>
        </div>
        <div className="tailor__heading__part2 col-lg-4 col-md-5 col-12 justify-content-end">
          <div className="tailor__quick__search">
            <input
              type="text"
              placeholder="Quick search by id"
              className="tailor__quick__search__input"
            />
            <SearchIcon className="quick__search__icon"></SearchIcon>
          </div>
          <div className="tailor__status">
            <select name="" id="" className="tailor__status__options">
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Working">Working</option>
              <option selected value="Paid">
                Paid
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Order No.
              </th>
              <th scope="col" className="table__header">
                Date
              </th>
              <th scope="col" className="table__header">
                Status
              </th>
              <th scope="col" className="table__header">
                Customer
              </th>

              <th scope="col" className="table__header">
                Total
              </th>
              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {theOrders &&
              theOrders.map((order) => (
                <tr>
                  <th scope="row" className="table__order__number">
                    {order.order_id}
                  </th>
                  <td className="table__date">{order.date_time}</td>
                  <td>
                    <div className="table__status">
                      {" "}
                      {order.status === "delivered"
                        ? tableStatus
                        : tableStatusNotDeliverd}
                    </div>
                  </td>
                  <td className="table__customer">{order.first_name}</td>
                  <td className="table__price">
                    {" "}
                    <span className="table__rs__title">Rs.</span>
                    {order.total_price}
                  </td>{" "}
                  <td>{seeMoreFunction()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Order Details",
    theLink: "/orderDetails",
  },

  {
    icon: <PersonIcon></PersonIcon>,
    iconText: "Customer Details",
    theLink: "/customerDetails",
  },
  {
    icon: <LocalShippingIcon></LocalShippingIcon>,
    iconText: "Mark as delivered",
  },

  {
    icon: <DescriptionIcon></DescriptionIcon>,
    iconText: "Send Invoice",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
};

export default TailorOrdersScreen;
