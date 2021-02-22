import React from "react";
import "./TailorSales.css";
import DnsIcon from "@material-ui/icons/Dns";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
function TailorSales() {
  const dashBoardCard1Contents = [
    { title: "Today Orders", amount: "1,584", status: "4.76%" },
    { title: "Today Revenue", amount: "584", status: "6%" },
    { title: "Today Customers", amount: "4", status: "1.6%" },
  ];
  const dashBoardCard2Titles = ["Order Statistics", "Store Statistics"];

  return (
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
        <StoreStatistics></StoreStatistics>
      </div>
    </div>
  );
}

function DashBoardCard1({ dashBoardTitle, dashBoardAmount, dashBoardStatus }) {
  return (
    <div className="dashBoard__card col-lg-4 col-md-6 col-12">
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{dashBoardTitle}</div>
        <div className="dashBoardCard__amount">{dashBoardAmount}</div>
        <div className="dashBoardCard__status">
          <span className="dashBoard__status__amount">{dashBoardStatus}</span>
          <span className="dashBoard__status__text"> vs. Last Week</span>
        </div>
      </div>
    </div>
  );
}
function DashBoardCard2({ title }) {
  return (
    <div className="dashBoard__card  col-lg-4 col-md-4 col-12">
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{title}</div>
      </div>
    </div>
  );
}
function StoreStatistics() {
  const storeStatisticsData = [
    { title: "Orders", amount: "1,254", icon: <LocalMallIcon></LocalMallIcon> },
    {
      title: "Revenue",
      amount: "10,005",
      icon: <AttachMoneyIcon></AttachMoneyIcon>,
      containerColor: "#EFE8FF",
    },
    {
      title: "Customers",
      amount: "254",
      icon: <PeopleOutlineIcon></PeopleOutlineIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Products",
      amount: "54",
      icon: <WebAssetIcon></WebAssetIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Categories",
      amount: "14",
      icon: <DnsIcon></DnsIcon>,
      containerColor: "#DFF7FB",
    },
  ];
  return (
    <div className="dashBoard__card  col-lg-4 col-md-4 col-12">
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title"> Store Statistics</div>
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
    </div>
  );
}
function StoreStatisticsElement({ title, amount, icon, containerColor }) {
  return (
    <div className="store__statistics__element">
      <div className="store__statistics__data">
        <div className="theData__title">{title}</div>
        <div className="theData__amount">{amount}</div>
      </div>
      <div className="store__statistic__design">
        <div
          className="store__statistics__container"
          style={{ backgroundColor: "#EFE8FF" }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
export default TailorSales;
