import { Link } from "@material-ui/core";
import React, { useEffect } from "react";
import "../../styles/admin/AdminDashboardScreen.css";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import PersonIcon from "@material-ui/icons/Person";
import { WorkOutlineOutlined, PersonPinOutlined } from "@material-ui/icons";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminDashBoardDetailsAction } from "../../actions/adminActions";
import Loader from "../../Components/Loader";
function AdminDashboardScreen({ history }) {
  const adminDashBoard = useSelector((state) => state.adminDashBoard);
  const { loading, adminDashBoardInfo } = adminDashBoard;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminDashBoardDetailsAction());
  }, [dispatch]);

  return loading ? (
    <Loader></Loader>
  ) : (
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
          theContent={
            <TotalSales
              totalAmount={adminDashBoardInfo && adminDashBoardInfo.totalSales}
            ></TotalSales>
          }
          height="max-content"
        ></AdminDashboardCard1>
        {/* <AdminDashboardCard1
          title="Average Orders"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6  col-12"
          theContent={<AverageOrder></AverageOrder>}
          height="241px"
        ></AdminDashboardCard1> */}
      </div>

      {/* orders, customers, tailors, employees card👇 */}
      <div className="row">
        <AdminDashboardCard2
          title="Orders"
          amount={adminDashBoardInfo && adminDashBoardInfo.orders}
          // status="7.5"
        ></AdminDashboardCard2>

        <AdminDashboardCard2
          title="Customers"
          amount={adminDashBoardInfo && adminDashBoardInfo.customers}
          // status="5"
        ></AdminDashboardCard2>
        <AdminDashboardCard2
          title="Tailors"
          amount={adminDashBoardInfo && adminDashBoardInfo.totalTailors}
          // status="1"
        ></AdminDashboardCard2>
        <AdminDashboardCard2
          title="Employees"
          amount={adminDashBoardInfo && adminDashBoardInfo.totalEmployees}
          // status="6"
        ></AdminDashboardCard2>
      </div>

      {/* product requests, topProducts 👇 */}
      <div className="row"></div>

      {/* Store Statistics, order statistics, user by location👇 */}
      <div className="row">
        <AdminDashboardCard1
          title="Store Statistics"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6 col-12"
          theContent={
            <StoreStatisticsAdmin
              dashBoardInfo={adminDashBoardInfo && adminDashBoardInfo}
            ></StoreStatisticsAdmin>
          }
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
          theContent={
            <RecentOrdersAdmin
              dashBoardInfo={
                adminDashBoardInfo && adminDashBoardInfo.recentOrders
              }
              history={history}
            ></RecentOrdersAdmin>
          }
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
            {/* <div className="this__week__status__amount">{status}%</div>
            <div className="avearage__order__status__text">vs. last week</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function TotalSales({ totalAmount }) {
  function TotalSalesElement({ lastMonthAmount, thisWeekAmount, salesStatus }) {
    return (
      <div className="total__sales">
        <div className="total__amount">Rs. {totalAmount}</div>
        <div className="last__month__amount"></div>
        <div className="this__week__text"></div>
        <div className="this__week__container">
          <div className="this__week__amount"></div>
          <div className="this__week__status">
            <div className="this__week__status__amount"></div>
            <div className="this__week__status__text">
              {" "}
              Total sales of the entire store
            </div>
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
      // totalAmount={totalSalesData.totalSalesAmount}
      // lastMonthAmount={totalSalesData.lastMonthAmount}
      // thisWeekAmount={totalSalesData.thisWeekAmount}
      // salesStatus={totalSalesData.salesStatus}
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

function StoreStatisticsAdmin({ dashBoardInfo }) {
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
      amount: dashBoardInfo && dashBoardInfo.orders,
      icon: <LocalMallIcon style={{ color: "#854FFF" }}></LocalMallIcon>,
      containerColor: "#EFE8FF",
      iconColor: "#854FFF",
    },
    {
      title: "Revenue",
      amount: dashBoardInfo && dashBoardInfo.totalSales,
      icon: <AttachMoneyIcon style={{ color: "#09C2DE" }}></AttachMoneyIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Customers",
      amount: dashBoardInfo && dashBoardInfo.customers,
      icon: (
        <PeopleOutlineIcon style={{ color: "#FF63B6" }}></PeopleOutlineIcon>
      ),
      containerColor: "#FFEBF3",
    },
    {
      title: "Tailors",
      amount: dashBoardInfo && dashBoardInfo.totalTailors,
      icon: (
        <PersonPinOutlined style={{ color: "#9A6BFF" }}></PersonPinOutlined>
      ),
      containerColor: "#9a6bff35",
    },
    {
      title: "Employees",
      amount: dashBoardInfo && dashBoardInfo.totalEmployees,
      icon: (
        <WorkOutlineOutlined style={{ color: "#FFD752" }}></WorkOutlineOutlined>
      ),
      containerColor: "#ffd75275",
    },
    {
      title: "Products",
      amount: dashBoardInfo && dashBoardInfo.totalProducts,
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

// Recent Orders Admin 👇👇
function RecentOrdersAdmin({ dashBoardInfo, history }) {
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
  const orderDetailsPage = (orderId) => {
    history.push(`/orders/${orderId}`);
  };
  const customerDetailsPage = (customerId) => {
    history.push(`/customerDetails/${customerId}`);
  };
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
            {dashBoardInfo &&
              dashBoardInfo.map((order) => (
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
                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "Order Details",
                          theClickFunction: () => {
                            orderDetailsPage(order.order_id);
                          },
                        },

                        {
                          icon: <PersonIcon></PersonIcon>,
                          iconText: "Customer Details",
                          theClickFunction: () => {
                            customerDetailsPage(order.customer_id);
                          },
                        },
                      ]}
                    ></SeeMoreToogle>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withRouter(AdminDashboardScreen);
