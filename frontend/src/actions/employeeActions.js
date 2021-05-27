import axios from "axios";
import {
  EMPLOYEE_LOGIN_FAIL,
  EMPLOYEE_LOGIN_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_REGISTER_FAIL,
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
} from "../constants/employeeConstants";

export const employeeLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LOGIN_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/employee/employeeSignin",
      { email, password },
      config
    );
    dispatch({ type: EMPLOYEE_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("employeeInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const employeeRegisterAction =
  (
    first_name,
    last_name,
    phone,
    email,
    city,
    street,
    tailorStoreId,
    password,
    confirmPassword
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_REGISTER_REQUEST,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/employee/employeeRegister",
        {
          first_name,
          last_name,
          phone,
          email,
          city,
          street,
          tailorStoreId,
          password,
          confirmPassword,
        },
        config
      );
      dispatch({
        type: EMPLOYEE_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: EMPLOYEE_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("employeeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: EMPLOYEE_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
