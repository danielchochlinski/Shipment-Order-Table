import React from "react";

const OrderItem = ({
  orderNo,
  date,
  customer,
  trackingNo,
  status,
  consignee,
}) => {
  return (
    <tr>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{customer}</td>
      <td>{trackingNo}</td>
      <td>{status}</td>
      <td>{consignee}</td>
    </tr>
  );
};

export default OrderItem;
