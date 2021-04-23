import React, { useEffect } from "react";
import "../../styles/tailor/TailorSalesScreen.css";
import "../../styles/tailor/TailorOrdersScreen.css";

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
function TailorSalesScreen() {
  const tailorSalesDetails = useSelector((state) => state.tailorSalesDetails);
  const { loading, error, tailorSales } = tailorSalesDetails;

  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  const tailId = tailorInfo.tailorId;
  const dispatch = useDispatch();
  useEffect(() => {
    if (tailorInfo) {
      dispatch(tailorSalesDetailsAction(tailId));
    }
  }, [dispatch, tailorInfo, tailId]);
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
          dashBoardContent={<StoreStatistics></StoreStatistics>}
        ></DashBoardCard2>
      </div>
      <div className="row no-gutters">
        <DashBoardCard2
          title="Recent Orders"
          colLength="col-12"
          dashBoardContent={<RecentOrders></RecentOrders>}
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

function StoreStatistics() {
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
  const storeStatisticsData = [
    {
      title: "Orders",
      amount: "1,254",
      icon: <LocalMallIcon style={{ color: "#854FFF" }}></LocalMallIcon>,
      containerColor: "#EFE8FF",
      iconColor: "#854FFF",
    },
    {
      title: "Revenue",
      amount: "10,005",
      icon: <AttachMoneyIcon style={{ color: "#09C2DE" }}></AttachMoneyIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Customers",
      amount: "254",
      icon: (
        <PeopleOutlineIcon style={{ color: "#FF63B6" }}></PeopleOutlineIcon>
      ),
      containerColor: "#FFEBF3",
    },
    {
      title: "Products",
      amount: "54",
      icon: <WebAssetIcon style={{ color: "#816BFF" }}></WebAssetIcon>,
      containerColor: "#EFECFF",
    },
  ];
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

function RecentOrders() {
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
  const tableRow = (
    <tr>
      <th scope="row" className="table__order__number">
        #124fdf
      </th>
      <td className="table__date">June 4, 2020</td>
      <td>
        <div className="table__status"> {tableStatus}</div>
      </td>
      <td className="table__customer">Swarnima Chaudhary</td>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td>{seeMoreFunction()}</td>
    </tr>
  );
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
          <tbody>{tableRow}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorSalesScreen;
