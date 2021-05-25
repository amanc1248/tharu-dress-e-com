import {
  TAILOR_ADD_PRODUCT_FAIL,
  TAILOR_ADD_PRODUCT_REQUEST,
  TAILOR_ADD_PRODUCT_SUCCESS,
  TAILOR_CUSTOMERS_DETAILS_FAIL,
  TAILOR_CUSTOMERS_DETAILS_REQUEST,
  TAILOR_CUSTOMERS_DETAILS_SUCCESS,
  TAILOR_DETAILS_FAIL,
  TAILOR_DETAILS_REQUEST,
  TAILOR_DETAILS_SUCCESS,
  TAILOR_EMPLOYEES_DETAILS_FAIL,
  TAILOR_EMPLOYEES_DETAILS_REQUEST,
  TAILOR_EMPLOYEES_DETAILS_SUCCESS,
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
  TAILOR_LOGOUT,
  TAILOR_ORDERS_DETAILS_FAIL,
  TAILOR_ORDERS_DETAILS_REQUEST,
  TAILOR_ORDERS_DETAILS_SUCCESS,
  TAILOR_PRODUCTS_DETAILS_FAIL,
  TAILOR_PRODUCTS_DETAILS_REQUEST,
  TAILOR_PRODUCTS_DETAILS_SUCCESS,
  TAILOR_REGISTER_FAIL,
  TAILOR_REGISTER_REQUEST,
  TAILOR_REGISTER_SUCCESS,
  TAILOR_SALES_DETAILS_FAIL,
  TAILOR_SALES_DETAILS_REQUEST,
  TAILOR_SALES_DETAILS_SUCCESS,
  TAILOR_UPDATE_PROFILE_FAIL,
  TAILOR_UPDATE_PROFILE_REQUEST,
  TAILOR_UPDATE_PROFILE_SUCCESS,
} from "../constants/tailorConstants";

export const tailorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_LOGIN_REQUEST:
      return { loading: true };
    case TAILOR_LOGIN_SUCCESS:
      return { loading: false, tailorInfo: action.payload };
    case TAILOR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TAILOR_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const tailorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_REGISTER_REQUEST:
      return { loading: true };
    case TAILOR_REGISTER_SUCCESS:
      return { loading: false, tailorInfo: action.payload };
    case TAILOR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const tailorDetailsReducer = (state = { tailor: {} }, action) => {
  switch (action.type) {
    case TAILOR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case TAILOR_DETAILS_SUCCESS:
      return { loading: false, tailor: action.payload };
    case TAILOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case TAILOR_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, tailorInfo: action.payload };
    case TAILOR_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tailorSalesDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_SALES_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_SALES_DETAILS_SUCCESS:
      return { loading: false, tailorSales: action.payload };
    case TAILOR_SALES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_ORDERS_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_ORDERS_DETAILS_SUCCESS:
      return { loading: false, orders: action.payload };
    case TAILOR_ORDERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, products: action.payload };
    case TAILOR_PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorCustomersReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_CUSTOMERS_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_CUSTOMERS_DETAILS_SUCCESS:
      return { loading: false, customers: action.payload };
    case TAILOR_CUSTOMERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorEmployeesReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_EMPLOYEES_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_EMPLOYEES_DETAILS_SUCCESS:
      return { loading: false, employees: action.payload };
    case TAILOR_EMPLOYEES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorAddProductReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_ADD_PRODUCT_REQUEST:
      return { loading: true };
    case TAILOR_ADD_PRODUCT_SUCCESS:
      return { loading: false, tailorAddProductInfo: action.payload };
    case TAILOR_ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
