import React from "react";
import "../Admin.css";
function Dashboard() {
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
          theContent={<TotalSales></TotalSales>}
        ></AdminDashboardCard1>
        <AdminDashboardCard1
          title="Average Orders"
          backgroundColor="white"
          titleColor="#526484"
          theContent={<AverageOrder></AverageOrder>}
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
}) {
  return (
    <div className="admin__dashboard__card1 col-lg-4 col-md-6 col-12">
      <div
        className="admin__dashbaord__card1__container"
        style={{ backgroundColor: `${backgroundColor}` }}
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
export default Dashboard;
