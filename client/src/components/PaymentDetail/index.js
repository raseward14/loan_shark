import React from "react";
import "./style.css";

function PaymentDetail({ balance, date }) {
  return (
    <div>
      <h2>Payment Balance: ${balance}</h2>
      <h3>{date}</h3>
    </div>
  );
}

export default PaymentDetail;