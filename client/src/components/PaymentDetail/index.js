import React from "react";
import "./style.css";

function PaymentDetail({ balance, date }) {
  return (
    <div>
      <h2>{date}</h2>
      <h3>Balance: ${balance}</h3>
    </div>
  );
}

export default PaymentDetail;