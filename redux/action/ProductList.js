export const PRODUCT_LIST = 'PRODUCT_LIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_INCREMENT = 'ADD_TO_INCREMENT';
export const ADD_TO_DECREMENT = 'ADD_TO_DECREMENT';

export const getProductList = data => {
  return function (dispatch) {
    dispatch({type: 'PRODUCT_LIST', product_list: data});
  };
};

export const addToCart = id => {
  return function (dispatch) {
    dispatch({type: 'ADD_TO_CART', cart_id: id});
  };
};

export const handleToIncrement = id => {
  return function (dispatch) {
    dispatch({type: 'ADD_TO_INCREMENT', increment_id: id});
    return true;
  };
};

export const handleToDecrement = id => {
  return function (dispatch) {
    dispatch({type: 'ADD_TO_DECREMENT', decrement_id: id});
    return true;
  };
};
