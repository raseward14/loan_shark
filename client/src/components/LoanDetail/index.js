import React from "react";
import "./style.css";

function LoanDetail({ name, date, amount }) {
  return (
    <div>
      <h3>{name}</h3>
      <h2>{date}</h2>
      <h2>Balance: ${amount}</h2>
    </div>
  );
}

export default LoanDetail;
