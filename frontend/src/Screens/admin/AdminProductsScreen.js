import React, { useEffect } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  adminAllProductOrdersDetailAction,
  adminAllProductsDetailAction,
} from "../../actions/adminActions";
import Loader from "../../Components/Loader";

function AdminProductsScreen({ history }) {
  const adminAllProducts = useSelector((state) => state.adminAllProducts);
  const { loading, adminAllProductsInfo } = adminAllProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAllProductsDetailAction());
  }, [dispatch]);
  const productPage = (productId) => {
    history.push(`/productIndividual/${productId}`);
  };

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="products__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">PRODUCTS </h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Title
              </th>
              <th scope="col" className="table__header">
                Date Added
              </th>
              <th scope="col" className="table__header">
                Total Orders
              </th>

              <th scope="col" className="table__header">
                Tailor
              </th>
              <th scope="col" className="table__header">
                Total Customers
              </th>

              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllProductsInfo &&
              adminAllProductsInfo.map((product) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {product.name}
                  </th>
                  <td className="table__customer">{product.dateAdded}</td>
                  <td className="table__date">{product.totalOrders}</td>
                  <td className="table__date">{product.tailor}</td>
                  <td className="table__date">{product.totalCustomers}</td>

                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Product Details",
                          theClickFunction: () => {
                            productPage(product.product_id);
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

export default withRouter(AdminProductsScreen);
