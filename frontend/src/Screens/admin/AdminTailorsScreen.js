import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import "../../styles/admin/AdminTailorsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { adminAllTailorsDetailAction } from "../../actions/adminActions";
import Loader from "../../Components/Loader";

function AdminTailorsScreen({ history }) {
  const adminAllTailors = useSelector((state) => state.adminAllTailors);
  const { loading, adminAllTailorsInfo } = adminAllTailors;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminAllTailorsDetailAction());
  }, [dispatch]);

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">TAILORS</h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Date Joined
              </th>

              <th scope="col" className="table__header">
                Total Sales
              </th>
              <th scope="col" className="table__header">
                Location
              </th>
              <th scope="col" className="table__header">
                Total Employees
              </th>
              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllTailorsInfo &&
              adminAllTailorsInfo.map((tailor) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {tailor.name}
                  </th>
                  <td className="table__customer">{tailor.dateJoined}</td>
                  <td className="table__price">
                    <span className="table__rs__title">Rs.</span>
                    {tailor.totalSales}
                  </td>
                  <td className="table__location">{tailor.Location}</td>
                  <td className="table__location">{tailor.totalEmployees}</td>
                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Tailor Details",
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

export default withRouter(AdminTailorsScreen);
