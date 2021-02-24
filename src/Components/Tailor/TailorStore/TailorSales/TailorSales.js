import React from "react";
import "./TailorSales.css";
import DnsIcon from "@material-ui/icons/Dns";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
import { SeeMoreToogle } from "../../../Global/SeeMoreContainer";
function TailorSales() {
  const dashBoardCard1Contents = [
    { title: "Today Orders", amount: "1,584", status: "4.76%" },
    { title: "Today Revenue", amount: "584", status: "6%" },
    { title: "Today Customers", amount: "4", status: "1.6%" },
  ];

  return (
    <div className="tailor__sales">
      <div className="tailor__products__heading">
        <h5 className="tailor__tabs__title">DASHBOARD</h5>
      </div>
      <div className="row no-gutters">
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
      <div className="row no-gutters">
        <DashBoardCard2
          title="Order Statistics"
          colLength="col-lg-4 col-md-6 col-12"
        >
          this is order
        </DashBoardCard2>
        <DashBoardCard2
          title="Store Statistics"
          colLength="col-lg-4 col-md-6 col-12"
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
      <div className="row no-gutters">
        <DashBoardCard2
          title="Top Products"
          colLength="col-lg-4 col-md-6 col-12"
          dashBoardContent={<TopProducts></TopProducts>}
        ></DashBoardCard2>
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
    {
      title: "Categories",
      amount: "14",
      icon: <DnsIcon style={{ color: "#09C2DE" }}></DnsIcon>,
      containerColor: "#DFF7FB",
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
      icon: <AssignmentIndIcon></AssignmentIndIcon>,
      iconText: "Employee Details",
      theLink: "/employeeDetails",
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
      <td className="table__purchased__item">1 item</td>
      <td className="table__assigned">Manturam Chaudhary</td>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td>{seeMoreFunction()}</td>
    </tr>
  );
  return (
    <div>
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
                Purchased
              </th>
              <th scope="col" className="table__header">
                Assigned To
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
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TopProducts() {
  const topProductsList = [
    {
      image: "productImage.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 4,
    },
    {
      image: "productImage.png",
      title: "Men Dhoti",
      price: 5000,
      totalSold: 4,
    },
    {
      image: "productImage.png",
      title: "Kids Size Anchara",
      price: 9000,
      totalSold: 1,
    },
    {
      image: "productImage.png",
      title: "Flower Design Anchara",
      price: 5000,
      totalSold: 10,
    },
    {
      image: "productImage.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 14,
    },
  ];
  function TopProductsElement({ image, title, price, totalSold }) {
    return (
      <div className="top__products__element">
        <div className="first__part">
          <div className="top__product__image__container">
            <img src={image} alt="topProduct" className="top__product__image" />
          </div>
          <div className="title__price">
            <div className="top__product__title">{title}</div>
            <div className="top__product__price">Rs. {price}</div>
          </div>
        </div>
        <div className="second__part">
          <div className="total__price">Rs. {price * totalSold}</div>
          <div className="total__sold">{totalSold} Sold</div>
        </div>
      </div>
    );
  }
  return (
    <div className="top__products">
      {topProductsList.map((obj) => {
        return (
          <TopProductsElement
            title={obj.title}
            price={obj.price}
            totalSold={obj.totalSold}
            image={obj.image}
          ></TopProductsElement>
        );
      })}
    </div>
  );
}
export default TailorSales;
