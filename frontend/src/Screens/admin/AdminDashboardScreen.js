import { Link } from "@material-ui/core";
import React from "react";
import "../../styles/admin/AdminDashboardScreen.css";

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
import { WorkOutlineOutlined, PersonPinOutlined } from "@material-ui/icons";
import { Doughnut } from "react-chartjs-2";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
function AdminDashboardScreen() {
  return (
    <div className="dashboard">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">DASHBOARD</h5>
      </div>

      {/* Total sales and average orders cards👇 */}
      <div className="row">
        <AdminDashboardCard1
          title="Total Sales"
          backgroundColor="#3A2272"
          titleColor="white"
          theWidth="col-lg-6  col-12"
          theContent={<TotalSales></TotalSales>}
          height="max-content"
        ></AdminDashboardCard1>
        <AdminDashboardCard1
          title="Average Orders"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6  col-12"
          theContent={<AverageOrder></AverageOrder>}
          height="241px"
        ></AdminDashboardCard1>
      </div>

      {/* orders, customers, tailors, employees card👇 */}
      <div className="row">
        <AdminDashboardCard2
          title="Orders"
          amount="9763"
          status="7.5"
        ></AdminDashboardCard2>

        <AdminDashboardCard2
          title="Customers"
          amount="763"
          status="5"
        ></AdminDashboardCard2>
        <AdminDashboardCard2
          title="Tailors"
          amount="93"
          status="1"
        ></AdminDashboardCard2>
        <AdminDashboardCard2
          title="Employees"
          amount="93"
          status="6"
        ></AdminDashboardCard2>
      </div>

      {/* product requests, topProducts 👇 */}
      <div className="row">
        <AdminDashboardCard1
          title="Product Requests"
          backgroundColor="#DFF7FB"
          theWidth="col-lg-6  col-12"
          titleColor="#526484"
          theContent={<ProductRequests></ProductRequests>}
          height="max-content"
        ></AdminDashboardCard1>

        <AdminDashboardCard1
          title="Top Products"
          backgroundColor="white"
          theWidth="col-lg-6 col-12"
          titleColor="#526484"
          theContent={<TopProductsAdmin></TopProductsAdmin>}
          height="max-content"
        ></AdminDashboardCard1>
      </div>

      {/* Store Statistics, order statistics, user by location👇 */}
      <div className="row">
        <AdminDashboardCard1
          title="Store Statistics"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6 col-12"
          theContent={<StoreStatisticsAdmin></StoreStatisticsAdmin>}
          height="max-content"
        ></AdminDashboardCard1>

        <AdminDashboardCard1
          title="Order Statistics"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6 col-12"
          theContent={<OrderStatisticsAdmin></OrderStatisticsAdmin>}
          height="max-content"
        ></AdminDashboardCard1>
        <AdminDashboardCard1
          title="User by location"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6 col-12"
          // theContent={}
          height="max-content"
        ></AdminDashboardCard1>
      </div>

      {/* Recent Order 👇 */}
      <div className="row no-gutters">
        <AdminDashboardCard1
          title="Recent Orders"
          backgroundColor="white"
          theWidth="col-12"
          titleColor="#526484"
          theContent={<RecentOrdersAdmin></RecentOrdersAdmin>}
          height="max-content"
        ></AdminDashboardCard1>
      </div>
    </div>
  );
}

function AdminDashboardCard1({
  title,
  backgroundColor,
  titleColor,
  theContent,
  height,
  theWidth,
}) {
  return (
    <div className={`admin__dashboard__card1 ${theWidth}`}>
      <div
        className="admin__dashbaord__card1__container"
        style={{ backgroundColor: `${backgroundColor}`, height: `${height}` }}
      >
        <div
          className="admin__dashbaord__card1__title"
          style={{ color: `${titleColor}` }}
        >
          {title}
        </div>
        <div className="admin__dashboard__card1__content">{theContent}</div>
      </div>
    </div>
  );
}
function AdminDashboardCard2({ title, amount, status }) {
  return (
    <div className="admin__dashbaord__card2 col-lg-6 col-12">
      <div className="admin__dashbaord__card2__container">
        <div className="admin__dashboard__card2">{title}</div>
        <div className="this__week__average">
          <div className="this__week__average__amount">{amount}</div>
          <div className="this__week__status">
            <div className="this__week__status__amount">{status}%</div>
            <div className="avearage__order__status__text">vs. last week</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TotalSales() {
  function TotalSalesElement({
    totalAmount,
    lastMonthAmount,
    thisWeekAmount,
    salesStatus,
  }) {
    return (
      <div className="total__sales">
        <div className="total__amount">Rs. {totalAmount}</div>
        <div className="last__month__amount">
          Rs. {lastMonthAmount} in last month
        </div>
        <div className="this__week__text">This week so far</div>
        <div className="this__week__container">
          <div className="this__week__amount">Rs. {thisWeekAmount}</div>
          <div className="this__week__status">
            <div className="this__week__status__amount">{salesStatus}%</div>
            <div className="this__week__status__text">vs. last week</div>
          </div>
        </div>
      </div>
    );
  }
  const totalSalesData = {
    totalSalesAmount: 7495.8,
    lastMonthAmount: 7395,
    thisWeekAmount: 989,
    salesStatus: 9,
  };
  return (
    <div className="">
      <TotalSalesElement
        totalAmount={totalSalesData.totalSalesAmount}
        lastMonthAmount={totalSalesData.lastMonthAmount}
        thisWeekAmount={totalSalesData.thisWeekAmount}
        salesStatus={totalSalesData.salesStatus}
      ></TotalSalesElement>
    </div>
  );
}

function AverageOrder() {
  const averageOrderData = {
    averageOrderAmount: 554.2,
    averageOrderPercentage: 4.5,
  };
  function AverageOrderElement({ averageOrderAmount, averageOrderPercentage }) {
    return (
      <div>
        <div className="this__week__average">
          <div className="this__week__average__amount">
            Rs. {averageOrderAmount}
          </div>
          <div className="this__week__status">
            <div className="this__week__status__amount">
              {averageOrderPercentage}%
            </div>
            <div className="avearage__order__status__text">vs. last week</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="average__order">
      <AverageOrderElement
        averageOrderAmount={averageOrderData.averageOrderAmount}
        averageOrderPercentage={averageOrderData.averageOrderPercentage}
      ></AverageOrderElement>
    </div>
  );
}

function ProductRequests() {
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
      <div className="products__requests__element">
        <div className="product__request__first__part">
          <div className="product__request__image__container">
            <img src={image} alt="topProduct" className="top__product__image" />
          </div>
          <div className="title__price">
            <div className="product__request__title">{title}</div>
            <div className="product__request__price">Rs. {price}</div>
          </div>
        </div>
        <div className="product__request__second__part">
          <div className="see__request__detail">
            <Link>See Details</Link>
          </div>
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
function TopProductsAdmin() {
  const topProductsList = [
    {
      image: "topproduct.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 4,
    },
    {
      image: "topproduct.png",
      title: "Men Dhoti",
      price: 5000,
      totalSold: 4,
    },
    {
      image: "topproduct.png",
      title: "Kids Size Anchara",
      price: 9000,
      totalSold: 1,
    },
    {
      image: "topproduct.png",
      title: "Flower Design Anchara",
      price: 5000,
      totalSold: 10,
    },
    {
      image: "topproduct.png",
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

function StoreStatisticsAdmin() {
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
      title: "Tailors",
      amount: "254",
      icon: (
        <PersonPinOutlined style={{ color: "#9A6BFF" }}></PersonPinOutlined>
      ),
      containerColor: "#9a6bff35",
    },
    {
      title: "Employees",
      amount: "254",
      icon: (
        <WorkOutlineOutlined style={{ color: "#FFD752" }}></WorkOutlineOutlined>
      ),
      containerColor: "#ffd75275",
    },
    {
      title: "Products",
      amount: "547",
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

// Recent Orders Admin 👇👇
function RecentOrdersAdmin() {
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
        <table class="table " id="admin__recentOrders__table">
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
function OrderStatisticsAdmin() {
  return (
    <div className="order__statistics">
      <Doughnut
        data={{
          labels: ["Processing", "Cancelled", "Completed"],
          datasets: [
            {
              data: [38, 9, 239],
              backgroundColor: ["#00C0EB", "#FF5CA0", "#6347FF"],
            },
          ],
        }}
        options={{
          legend: {
            display: true,
            position: "bottom",
            fontFamily: "Arial",
            postion: "right",
          },
        }}
      />
    </div>
  );
}

export default AdminDashboardScreen;
