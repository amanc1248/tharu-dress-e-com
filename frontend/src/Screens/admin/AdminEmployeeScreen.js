import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { adminAllEmployeesDetailAction } from "../../actions/adminActions";

function AdminEmployeeScreen({ history }) {
  const adminAllEmployees = useSelector((state) => state.adminAllEmployees);
  const { loading, adminAllEmployeesInfo } = adminAllEmployees;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAllEmployeesDetailAction());
  }, [dispatch]);

  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "See Employee Details",
      theLink: "/orderDetails",
    },
  ];
  const seeMoreFunction = () => {
    return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
  };

  return loading ? (
    <Loader> </Loader>
  ) : (
    <div className="employee__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">EMPLOYEES</h5>
      </div>
      <div className="tailor__orders">
        <table class="table admin__employees__table" id="">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Date Joined
              </th>

              <th scope="col" className="table__header">
                Location
              </th>
              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllEmployeesInfo &&
              adminAllEmployeesInfo.map((employee) => (
                <tr key={employee.employeeId}>
                  <th scope="row" className="table__customer">
                    {employee.name}
                  </th>
                  <td className="table__customer">{employee.dateJoined}</td>

                  <td className="table__location">{employee.Location}</td>
                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Employee Details",
                          theClickFunction: () => {},
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

export default withRouter(AdminEmployeeScreen);
