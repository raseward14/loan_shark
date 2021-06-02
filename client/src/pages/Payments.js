import React, { useEffect, useState } from "react";
import PaymentDetail from "../components/PaymentDetail";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams } from "react-router-dom";
import * as paymentAPIFunctions from "../utils/PaymentAPI";

function Payments(props) {
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState({});
  // const [formObject, setFormObject] = useState({});

  const { id } = useParams();
  const query = { id }; // {id: "lasdjfa;slkfj"}
  const loanId = Object.values(query).toString(); // "lkajsdf;oijf"

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      loadPayments();
      loadPayment();
    }

    return () => {
      unmounted = true;
    };
  });
 
  // format date
  function formatDate(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = dateString.substring(0, 10);
    const yearMonthDay = date.split("-");
    const year = yearMonthDay[0];
    const monthIndex = parseFloat(yearMonthDay[1]) - 1;
    const month = months[monthIndex];
    const day = yearMonthDay[2];
    return `${month} ${day}, ${year}`;
  }

  // loan all users loans
  function loadPayments() {
    paymentAPIFunctions
      .getPayments()
      .then((res) => {
        let specificPayments = [];
        let resultsArray = res.data;
        resultsArray.map((result) => (result.date = formatDate(result.date)));
        resultsArray.forEach((result) => {
          if (result.loan_id === loanId) {
            specificPayments.push(result);
          } else {
            return;
          }
        });
        setPayments(specificPayments);
      })
      .catch((err) => console.log(err));
  }

  function loadPayment() {
    if (!payment) {
      setPayment(payments[0]);
    }
  }

  // delete payment
  function deletePayment(id) {
    paymentAPIFunctions
      .deletePayment(id)
      .then(() => loadPayments())
      .catch((err) => console.log(err));
  }

  // expand clicked loan
  function handleClick(id) {
    console.log(id);
    paymentAPIFunctions
      .getPaymentById(id)
      .then((res) => {
        // variable, assign, set
        var result = formatDate(res.data.date);
        res.data.date = result;
        setPayment(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <List>
        {payments.map((payment) => (
          <ListItem key={payment._id}>
            <strong onClick={() => handleClick(payment._id)}>
              {payment.balance} on {payment.date}
            </strong>
            <DeleteBtn onClick={() => deletePayment(payment._id)} />
          </ListItem>
        ))}
      </List>

      {payment ? (
        <PaymentDetail balance={payment.balance} date={payment.date}>
          {payment.balance}
        </PaymentDetail>
      ) : (
        <h3>No Results to Display</h3>
      )}

      <Link to="/profile">← Back to Profile</Link>
    </div>
  );
}

export default Payments;
