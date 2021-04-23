import React, { useEffect } from "react";
import "../../styles/tailor/TailorSalesScreen.css";
import "../../styles/tailor/TailorOrdersScreen.css";
import { withRouter } from "react-router-dom";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { SeeMoreToogle } from "../../Components/SeeMoreContainer";
import { tailorSalesDetailsAction } from "../../actions/tailorActions";
import Loader from "../../Components/Loader";
function TailorSalesScreen({ history }) {
  const tailorSalesDetails = useSelector((state) => state.tailorSalesDetails);
  const { loading, error, tailorSales } = tailorSalesDetails;

  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;

  // const tailorrSales = `${tailorSales ? tailorSales : 0}`;
  const dispatch = useDispatch();
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailorId;
      console.log("screen id" + tailId);
      dispatch(tailorSalesDetailsAction(tailId));
    } else {
      history.push("/");
    }
  }, [dispatch, tailorInfo, history]);
  const dashBoardCard1Contents = [
    {
      title: "Today Orders",
      amount: `${tailorSales ? tailorSales.todaysOrders : 0}`,
      status: "4.76%",
    },
    {
      title: "Today Revenue",
      amount: `${tailorSales ? tailorSales.todaysRevenue : 0}`,
      status: "6%",
    },
    {
      title: "Today Customers",
      amount: `${tailorSales ? tailorSales.todaysCustomer : 0}`,
      status: "1.6%",
    },
  ];
  const storeStatisticsData = [
    {
      title: "Orders",
      amount: `${tailorSales ? tailorSales.totalOrders : 0}`,
      icon: <LocalMallIcon style={{ color: "#854FFF" }}></LocalMallIcon>,
      containerColor: "#EFE8FF",
      iconColor: "#854FFF",
    },
    {
      title: "Revenue",
      amount: `${tailorSales ? tailorSales.totalRevenue : 0}`,
      icon: <AttachMoneyIcon style={{ color: "#09C2DE" }}></AttachMoneyIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Customers",
      amount: `${tailorSales ? tailorSales.totalCustomer : 0}`,
      icon: (
        <PeopleOutlineIcon style={{ color: "#FF63B6" }}></PeopleOutlineIcon>
      ),
      containerColor: "#FFEBF3",
    },
    {
      title: "Products",
      amount: `${tailorSales ? tailorSales.totalTailorProducts : 0}`,
      icon: <WebAssetIcon style={{ color: "#816BFF" }}></WebAssetIcon>,
      containerColor: "#EFECFF",
    },
  ];
  console.log(tailorSales && tailorSales.recentOrders);
  const recentOrders = tailorSales && tailorSales.recentOrders;

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__sales">
      <div className="tailor__products__heading">
        <h5 className="tailor__tabs__title">DASHBOARD</h5>
      </div>
      <div className="row">
        {dashBoardCard1Contents.map((obj) => {
          return (
            <DashBoardCard1
              dashBoardTitle={obj.title}
              dashBoardAmount={obj.amount}
              dashBoardStatus={obj.status}
            ></DashBoardCard1>
          );
        })}
      </div>
      <div className="row">
        <DashBoardCard2
          title="Store Statistics"
          colLength="col-lg-6 col-12"
          dashBoardContent={
            <StoreStatistics
              storeStatisticsData={storeStatisticsData}
            ></StoreStatistics>
          }
        ></DashBoardCard2>
      </div>
      <div className="row no-gutters">
        <DashBoardCard2
          title="Recent Orders"
          colLength="col-12"
          dashBoardContent={
            <RecentOrders recentOrders={recentOrders}></RecentOrders>
          }
        ></DashBoardCard2>
      </div>
    </div>
  );
}

function DashBoardCard1({ dashBoardTitle, dashBoardAmount, dashBoardStatus }) {
  return (
    <div className="dashBoard__card col-lg-6 col-12">
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{dashBoardTitle}</div>
        <div className="dashBoardCard__amount">{dashBoardAmount}</div>

        <div className="this__week__status">
          <div className="this__week__status__amount">{dashBoardStatus}</div>
          <div className="avearage__order__status__text">vs. last week</div>
        </div>
      </div>
    </div>
  );
}
function DashBoardCard2({ title, dashBoardContent, colLength }) {
  return (
    <div className={`dashBoard__card ${colLength}`}>
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{title}</div>
        <div className="dashBoardCard__content">{dashBoardContent}</div>
      </div>
    </div>
  );
}

function StoreStatistics({ storeStatisticsData }) {
  function StoreStatisticsElement({
    title,
    amount,
    icon,
    containerColor,
    iconColor,
  }) {
    return (
      <div className="store__statistics__element">
        <div className="store__statistics__data">
          <div className="theData__title">{title}</div>
          <div className="theData__amount">{amount}</div>
        </div>
        <div className="store__statistic__design">
          <div
            className="store__statistics__container"
            style={{ backgroundColor: `${containerColor}` }}
          >
            <div className="the__icon" style={{ fill: `${iconColor}` }}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {storeStatisticsData.map((obj) => {
        return (
          <StoreStatisticsElement
            title={obj.title}
            amount={obj.amount}
            icon={obj.icon}
            containerColor={obj.containerColor}
          ></StoreStatisticsElement>
        );
      })}
    </div>
  );
}

function RecentOrders({ recentOrders }) {
  // console.log("This is recent orders first element");
  // console.log(recentOrders.length);
  // console.log(recentOrders[0][0]);
  // console.log(recentOrders[1]);
  // console.log(recentOrders[2]);
  // console.log(recentOrders[3]);
  // console.log(recentOrders[4]);
  // console.log(recentOrders[5]);
  // console.log(recentOrders[6]);
  // console.log(recentOrders[7]);

  // recent orders data👇👇👇
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
      icon: <CheckBoxIcon></CheckBoxIcon>,
      iconText: "Mark as paid",
    },
    {
      icon: <DescriptionIcon></DescriptionIcon>,
      iconText: "Send Invoice",
    },
  ];
  const seeMoreFunction = () => {
    return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
  };
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

  // const tableRow = (

  // );
  return (
    <div>
      <div className="">
        <table class="table admin__recentOrders__table " id="">
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
              {/* <th scope="col" className="table__header">
                Purchased
              </th> */}

              <th scope="col" className="table__header">
                Total
              </th>
              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {recentOrders[0]["first_name"]} */}
            {recentOrders &&
              recentOrders.map((order) => (
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

export default withRouter(TailorSalesScreen);
