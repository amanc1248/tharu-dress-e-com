import axios from "axios";
import {
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
} from "../constants/tailorConstants";

export const tailorLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_LOGIN_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/tailor/tailorsignin",
      { email, password },
      config
    );
    dispatch({ type: TAILOR_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("tailorInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAILOR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
