import React from "react";
import "./OrderDetails.css";
import useInput from "../../hooks/useInput";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const OrderDetails = (props) => {
  // const { orderNo, date, customer, trackingNo, status, consignee } = onShow
  const isNotEmpty = (value) => value.trim() !== "";
  const { orderNo, date, customer, trackingNo, status, consignee } =
    props.onShow;
  const {
    value: orderNoValue,
    isValid: orderNoIsValid,
    hasError: orderNoInputHasError,
    valueChangeHandler: orderNoChangeHandler,
    inputBlurHandler: orderNoBlurHandler,
    reset: orderNoReset,
  } = useInput(isNotEmpty);

  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: dateReset,
  } = useInput(isNotEmpty);

  const {
    value: customerValue,
    isValid: customerIsValid,
    hasError: customerInputHasError,
    valueChangeHandler: customerChangeHandler,
    inputBlurHandler: customerBlurHandler,
    reset: customerReset,
  } = useInput(isNotEmpty);

  const {
    value: trackingNoValue,
    isValid: trackingNoIsValid,
    hasError: trackingNoInputHasError,
    valueChangeHandler: trackingNoChangeHandler,
    inputBlurHandler: trackingNoBlurHandler,
    reset: trackingNoReset,
  } = useInput(isNotEmpty);

  const {
    value: statusValue,
    isValid: statusIsValid,
    hasError: statusInputHasError,
    valueChangeHandler: statusChangeHandler,
    inputBlurHandler: statusBlurHandler,
    reset: statusReset,
  } = useInput(isNotEmpty);

  const {
    value: consigneeValue,
    isValid: consigneeIsValid,
    hasError: consigneeInputHasError,
    valueChangeHandler: consigneeChangeHandler,
    inputBlurHandler: consigneeBlurHandler,
    reset: consigneeReset,
  } = useInput(isNotEmpty);

  const submitHandler = () => {
    let data = {
      orderNo: orderNoValue,
      date: dateValue,
      customer: customerValue,
      trackingNo: trackingNoValue,
      status: statusValue,
      consignee: consigneeValue,
    };
    console.log("hello");
    console.log(data);
  };
  return (
    <Modal>
      <div className="container">
        <div>
          <Button handleClick={props.onClose}>X</Button>
        </div>
        <div className="grid">
          <div className="input_form">
            <label htmlFor="">orderNo</label>
            <input
              type="text"
              placeholder={orderNo}
              value={orderNoValue}
              onChange={orderNoChangeHandler}
              onBlur={orderNoBlurHandler}
            />
          </div>
          <div className="input_form">
            <label htmlFor="">date</label>
            <input
              type="text"
              placeholder={date}
              value={dateValue}
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
            />
          </div>
          <div className="input_form">
            <label htmlFor="">customer</label>
            <input
              type="text"
              placeholder={customer}
              value={customerValue}
              onChange={customerChangeHandler}
              onBlur={customerBlurHandler}
            />
          </div>
          <div className="input_form">
            <label htmlFor="">trackingNo</label>
            <input
              type="text"
              placeholder={trackingNo}
              value={trackingNoValue}
              onChange={trackingNoChangeHandler}
              onBlur={trackingNoBlurHandler}
            />
          </div>
          <div className="input_form">
            <label htmlFor="">status</label>
            <input
              type="text"
              placeholder={status}
              value={statusValue}
              onChange={statusChangeHandler}
              onBlur={statusBlurHandler}
            />
          </div>
          <div className="input_form">
            <label htmlFor="">consignee</label>
            <input
              type="text"
              placeholder={consignee}
              value={consigneeValue}
              onChange={consigneeChangeHandler}
              onBlur={consigneeBlurHandler}
            />
          </div>
        </div>
      </div>
      <Button handleClick={submitHandler}>Submit Changes</Button>
    </Modal>
  );
};

export default OrderDetails;
