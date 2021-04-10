import {
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
} from "../constants/productConstants.js";
export const productCategoryListReducers = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
