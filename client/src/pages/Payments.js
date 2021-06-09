import React, { useEffect, useState } from "react";
import PaymentDetail from "../components/PaymentDetail";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams, Redirect } from "react-router-dom";
import * as paymentAPIFunctions from "../utils/PaymentAPI";
import * as loanAPIFunctions from "../utils/LoanAPI";
import { Input, FormBtn } from "../components/Form";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Payments() {
  const [amountBorrowed, setAmountBorrowed] = useState(0);
  const [loanName, setLoanName] = useState();
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState({});
  const [totalPaid, setTotalPaid] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [formObject, setFormObject] = useState({});

  // const { buttonLabel, className } = props;
  // const [modal, setModal] = useState(false);

  const { id } = useParams();
  const loanid = Object.values({ id }).toString(); // "lkajsdf;oijf"
  // var result;

  useEffect(() => {
    loadLoan(loanid);
    loadPayments(loanid);
    loadPayment();
  }, [amountBorrowed]);

  useEffect(() => {
    if (amountBorrowed <= totalPaid) {
      checkIfPaid();
    }
  }, [remainingBalance]);

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

  // pop up modal
  // const toggle = () => setModal(!modal);

  // get loan by id, setAmountBorrowed, and setLoanName
  function loadLoan(loanid) {
    loanAPIFunctions
      .getLoanById(loanid)
      .then((res) => {
        setAmountBorrowed(res.data.amount);
        setLoanName(res.data.name);
      })
      .catch((err) => console.log(err));
  };

  function checkIfPaid() {
    if (amountBorrowed !== 0 && remainingBalance <= 0) {
      loanAPIFunctions
        .deleteLoan(loanid)
        .then(() => {
          window.alert("Success! Loan fully paid.");
          // redirect to profile page
          return <Redirect from="/payments/:id" to="/profile" />
        })
        .catch((err) => console.log(err));
    }
  };

  // query payments by loanid
  function loadPayments(loanid) {
    paymentAPIFunctions
      .getPaymentsByLoanId(loanid)
      .then((res) => {
        // data array will only have the payments for this loan
        console.log(res);
        // initialize a paymentTotal, and resultsArray
        let paymentTotal = 0;
        let paymentResultsArray = res.data;
        // format date of every payment, and sum all payments
        paymentResultsArray.map(
          (result) => (result.date = formatDate(result.date))
        );
        paymentResultsArray.forEach((result) => {
          paymentTotal += result.balance;
        });
        // calculate difference between payment sum, and amount borrowed
        var result = amountBorrowed - paymentTotal;
        console.log(amountBorrowed, paymentTotal, result);
        // checkIfPaid(result);
        // setPayments lists payments from array, setTotalPaid is sum of all payments, setRemainingBalance with the difference btw amountBorrowed and sum of all payments
        setPayments(paymentResultsArray);
        setTotalPaid(paymentTotal);
        setRemainingBalance(result);
        if (!payment) {
          setPayment(payments[0]);
        }
      })
      .catch((err) => console.log(err));
  };

  function loadPayment() {
    if (!payment) {
      setPayment(payments[0]);
    }
  };

  // delete payment
  function deletePayment(id) {
    paymentAPIFunctions
      .deletePayment(id)
      .then(() => loadPayments(loanid))
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
        // setFormObject();
      })
      .catch((err) => console.log(err));
  };

  // updates component state when the user types in input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  // each time submit payment is clicked, save payment, then check to see if the loan is paid
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject.balance);
    console.log(loanid);
    if (formObject.balance) {
      paymentAPIFunctions
        .savePayment({
          balance: formObject.balance,
          loan_id: loanid,
        })
        .then(() => {
          loadPayments(loanid);
        })
        .catch((err) => console.log(err));
    };
  };

  return (
    <div>
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
      </div>

      <div>
        {payment ? (
          <PaymentDetail balance={payment.balance} date={payment.date}>
            {payment.balance}
          </PaymentDetail>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
      <p>
        Total {loanName} Loan Amount: ${amountBorrowed}
      </p>
      <p>All Payments Total: ${totalPaid}</p>
      <p>Remaining Balance: ${remainingBalance}</p>
      <div>
        <form>
          <Input
            onChange={handleInputChange}
            name="balance"
            placeholder="Payment Amount (required)"
          />
          <FormBtn disabled={!formObject.balance} onClick={handleFormSubmit}>
            Submit Payment
          </FormBtn>
        </form>
      </div>

      <Link to="/profile">← Back to Profile</Link>
      {/* <div> */}
      {/* <Button color="danger"></Button> */}
      {/* <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      {/* </div> */}
    </div>
  );
}

export default Payments;
