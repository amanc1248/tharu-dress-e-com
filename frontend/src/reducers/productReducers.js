import {
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_SPECIFICATION_DETAILS_FAIL,
  PRODUCT_SPECIFICATION_DETAILS_REQUEST,
  PRODUCT_SPECIFICATION_DETAILS_SUCCESS,
} from "../constants/productConstants.js";
export const categoryProductsReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// productbyid
export const productDetailsReducers = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productSpecificationReducers = (
  state = { productSpec: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_SPECIFICATION_DETAILS_REQUEST:
      return { loading: true, productSpec: [] };
    case PRODUCT_SPECIFICATION_DETAILS_SUCCESS:
      return {
        loading: false,
        productSpec: action.payload,
      };
    case PRODUCT_SPECIFICATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
