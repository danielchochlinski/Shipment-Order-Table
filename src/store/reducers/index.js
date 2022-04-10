import { combineReducers } from "redux";
import ordersReducer from "./orders";

const rootReducer = combineReducers({
  order: ordersReducer,
});

export default rootReducer;
