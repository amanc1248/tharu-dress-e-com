import React, { useEffect } from "react";
import "../../styles/employee/EmployeeCustomersScreen.css";
import Loader from "../../Components/Loader";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { employeeCustomersAction } from "../../actions/employeeActions";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import PersonIcon from "@material-ui/icons/Person";

function EmployeeCustomersScreen({ history }) {
  const employeeCustomers = useSelector((state) => state.employeeCustomers);
  const { loading, error, employeeCustomersInfo } = employeeCustomers;

  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;

  // const tailorrSales = `${tailorSales ? tailorSales : 0}`;
  const dispatch = useDispatch();
  useEffect(() => {
    if (employeeInfo) {
      const empId = employeeInfo.employee_id;
      dispatch(employeeCustomersAction(empId));
    } else {
    }
  }, [dispatch, employeeInfo]);
  const theCustomers =
    employeeCustomers && employeeCustomers.employeeCustomersInfo;

  const customerDetailsPage = (customerId) => {
    history.push(`/customerDetails/${customerId}`);
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="employee__customers">
      <div className="tailor__customer">
        <div className="tailor__customer__title">
          <h5 className="tailor__tabs__title">CUSTOMERS</h5>
        </div>
        <div className="tailor__customer__container">
          <table className="table" id="tailor__customer__table">
            <thead>
              <tr>
                <th scope="col" className="table__header">
                  Name
                </th>
                <th scope="col" className="table__header">
                  Date Joined
                </th>
                <th scope="col" className="table__header">
                  Email
                </th>
                <th scope="col" className="table__header">
                  Phone
                </th>

                <th scope="col" className="table__header">
                  See More
                </th>
              </tr>
            </thead>
            <tbody>
              {theCustomers &&
                theCustomers.map((customer) => (
                  <tr>
                    <th scope="row" className="table__customer">
                      {customer.customer}
                    </th>{" "}
                    <td className="table__location"> {customer.dateJoined}</td>{" "}
                    <td className="table__location"> {customer.email}</td>{" "}
                    <td className="table__customer">{customer.phone}</td>
                    <td>
                      <SeeMoreToogle
                        theList={[
                          {
                            icon: <PersonIcon></PersonIcon>,
                            iconText: "Customer Details",
                            theClickFunction: () => {
                              customerDetailsPage(customer.customer_id);
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
    </div>
  );
}

export default withRouter(EmployeeCustomersScreen);
