import React from "react";
import { Button, Table } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import "./Orders.css";
function CustomerOrdersScreen() {
  return (
    <div className="orders">
      <Table striped hover responsive bordered className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#**$@aisfd9999</td>
            <td>2021-02-5</td>
            <td>Rs. 15,000</td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <LinkContainer to="/">
                <Button className="btn-sm" variant="light">
                  Details
                </Button>
              </LinkContainer>
            </td>
          </tr>
          <tr>
            <td>#**$@aisfd9999</td>
            <td>2021-02-5</td>
            <td>Rs. 15,000</td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <LinkContainer to="/">
                <Button className="btn-sm" variant="light">
                  Details
                </Button>
              </LinkContainer>
            </td>
          </tr>{" "}
          <tr>
            <td>#**$@aisfd9999</td>
            <td>2021-02-5</td>
            <td>Rs. 15,000</td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <LinkContainer to="/">
                <Button className="btn-sm" variant="light">
                  Details
                </Button>
              </LinkContainer>
            </td>
          </tr>{" "}
          <tr>
            <td>#**$@aisfd9999</td>
            <td>2021-02-5</td>
            <td>Rs. 15,000</td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <LinkContainer to="/">
                <Button className="btn-sm" variant="light">
                  Details
                </Button>
              </LinkContainer>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerOrdersScreen;
