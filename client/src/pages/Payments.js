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
  const query = { id } // {id: "lasdjfa;slkfj"}
  const loanId = Object.values(query).toString(); // "lkajsdf;oijf"

  // console.log(query);

  useEffect(() => {
    loadPayments(loanId);
    loadPayment();
  });
  // console.log(query);
  // https://restdb.io/docs/querying-with-the-api
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
  };

  // function filterPayments(payment) {
  //   const loanId = Object.values(query).toString();
  //   console.log(payment.loan_id)
  //   return (payment.loan_id === loanId);
  // }

  // loan all users loans
  function loadPayments() {
    paymentAPIFunctions
      .getPayments()
      .then((res) => {
        let resultsArray = res.data;
        // console.log(resultsArray);
        resultsArray.map((result) => (result.date = formatDate(result.date)));
        // resultsArray.filter(filterPayments);

        // console.log(resultsArray);
        setPayments(resultsArray);
      })
      .catch((err) => console.log(err));
  };


// get specific payments
  // function loadPayments(query) {
  //     paymentAPIFunctions
  //       .getThesePayments(query)
  //       .then((res) => {
  //         let resultsArray = res.data;
  //         // console.log(resultsArray);
  //         resultsArray.map((result) => (result.date = formatDate(result.date)));
  
  //         // console.log(resultsArray);
  //         setPayments(resultsArray);
  //       })
  //       .catch((err) => console.log(err));
  //   };






  function loadPayment() {
    if (!payment) {
      setPayment(payments[0]);
    }
  };

  // delete payment
  function deletePayment(id) {
    paymentAPIFunctions
      .deletePayment(id)
      .then(() => loadPayments())
      .catch((err) => console.log(err));
  };

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
  };

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
