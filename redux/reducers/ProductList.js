import { PRODUCT_LIST, ADD_TO_CART, ADD_TO_INCREMENT, ADD_TO_DECREMENT} from '../action/ProductList';
const initialState = {
product_list: [],
cart_list:[],
cart_count:0,
total_amount:0
};
const productList = (state = initialState, action) => {
switch(action.type) {
case PRODUCT_LIST:
return {
...state,
product_list: action.product_list
};

case ADD_TO_CART:
var cart_id=action.cart_id;
var cart_data=state.product_list.find((item)=>item.id===cart_id);
var quantity =state.cart_count + 1;
var total_amount=state.total_amount + cart_data.amount  ;
cart_data.quantity+=1;
return {
...state,
cart_list: [...state.cart_list,cart_data],
cart_count:quantity,
total_amount:total_amount
};

case ADD_TO_INCREMENT:


var increment_id=action.increment_id;
var cart_data=state.product_list.find((item)=>item.id===increment_id);
if(cart_data)
{
  var quantity =state.cart_count + 1;
var total_amount=state.total_amount + cart_data.amount  ;
cart_data.quantity+=1;
return {
...state,
cart_count:quantity,
total_amount:total_amount
};
}

case ADD_TO_DECREMENT:

var decrement_id=action.decrement_id;
var cart_data=state.product_list.find((item)=>item.id===decrement_id);
if(cart_data)
{
  var quantity =state.cart_count - 1;
var total_amount=state.total_amount - cart_data.amount  ;
cart_data.quantity-=1;

 if(cart_data.quantity===0)
 {
var cart_new_list=state.cart_list.filter((item)=>item.id !== decrement_id);
return {
  ...state,
  cart_count:quantity,
  total_amount:total_amount,
cart_list: cart_new_list,

  };
 }else
 {
  return {
    ...state,
    cart_count:quantity,
    total_amount:total_amount
    };
 }

}



default:
return state;
}
}
export default productList;