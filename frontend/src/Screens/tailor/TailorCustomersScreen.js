import React, { useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import "../../styles/tailor/TailorCustomersScreen.css";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import { tailorCustomersAction } from "../../actions/tailorActions";
import Loader from "../../Components/Loader";
import { withRouter } from "react-router";

function TailorCustomersScreen({ history }) {
  const tailorCustomers = useSelector((state) => state.tailorCustomers);
  const { loading, error, customers } = tailorCustomers;

  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;

  // const tailorrSales = `${tailorSales ? tailorSales : 0}`;
  const dispatch = useDispatch();
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailorId;
      console.log("screen id" + tailId);
      dispatch(tailorCustomersAction(tailId));
    } else {
    }
  }, [dispatch, tailorInfo]);
  const theCustomers = tailorCustomers && tailorCustomers.customers;

  const customerDetailsPage = (customerId) => {
    history.push(`/customerDetails/${customerId}`);
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__customer">
      <div className="tailor__customer__title">
        <h5 className="tailor__tabs__title">CUSTOMERS</h5>
      </div>
      <div className="tailor__customer__container">
        <table className="table" id="tailor__customer__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                User
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
                    {customer.first_name + customer.last_name}
                  </th>
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
  );
}
export default withRouter(TailorCustomersScreen);
// for the customer see more
