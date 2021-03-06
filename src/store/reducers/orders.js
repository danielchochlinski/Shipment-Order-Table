import { ACTION_TYPES } from "../actions/orders";

const initialState = {
  orders: [],
  fetchFailure: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ORDERS:
      return {
        ...state,
        fetchFailure: false,
        orders: action.payload,
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        fetchFailure: true,
      };
    case ACTION_TYPES.REMOVE_ORDER:
      console.log("deleted");
      return {
        ...state,
        fetchFailure: false,
        orders: state.orders.filter(
          (item) => item.orderNo !== action.payload.orderNo
        ),
      };

    case ACTION_TYPES.UPDATE_ORDER:
      return {
        ...state,
        fetchFailure: false,
        orders: state.orders.map((order) => {
          if (order.orderNo === action.payload.orderNo) {
            return action.payload;
          }
          return order;
        }),
      };

    default:
      return state;
  }
};

export default ordersReducer;
