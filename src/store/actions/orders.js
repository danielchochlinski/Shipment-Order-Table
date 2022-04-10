import axios from "axios";
import APP_CONFIG from "../../config/app";

export const ACTION_TYPES = {
  FETCH_ORDERS: "fetchOrders",
  FETCH_FAILURE: "fetchFailure",
  REMOVE_ORDER: "removeOrder",
};
//GET
export const fetchOrders = () => {
  return (dispatch) => {
    axios
      .get(APP_CONFIG.API_URL)
      .then((response) =>
        dispatch({
          type: ACTION_TYPES.FETCH_ORDERS,
          payload: response.data,
        })
      )
      .catch((error) => {
        dispatch({ type: ACTION_TYPES.FETCH_FAILURE });
      });
  };
};

//PUT
export const updateOrder = () => {
  return (dispatch) => {
    axios
      .get(APP_CONFIG.API_URL)
      .then((response) =>
        dispatch({ type: ACTION_TYPES.UPDATE_ORDER, payload: response.data })
      );
  };
};
