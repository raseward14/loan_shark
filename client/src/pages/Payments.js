import React, { useEffect, useState } from "react";
import PaymentDetail from "../components/PaymentDetail";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams } from "react-router-dom";
import * as paymentAPIFunctions from "../utils/PaymentAPI";
import * as loanAPIFunctions from "../utils/LoanAPI";
import { Input, FormBtn } from "../components/Form";
// import Profile from "./Profile";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Payments() {
  // console.log(Profile.loan)
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
  const query = { id }; // {id: "lasdjfa;slkfj"}
  const paymentQuery = {loan_id: id}
  console.log(paymentQuery);
  const loanid = Object.values(query).toString(); // "lkajsdf;oijf"

  useEffect(() => {
    // let unmounted = false;

    // if (!unmounted) {
    loadLoan(loanid);
    loadPayments(paymentQuery);
    loadPayment();

    // }

    // return () => {
    //   unmounted = true;
    // };
  }, [amountBorrowed]);

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

  // pop up modal
  // const toggle = () => setModal(!modal);

  // expand clicked loan
  function loadLoan(id) {
    // console.log(id);
    loanAPIFunctions
      .getLoanById(id)
      .then((res) => {
        setAmountBorrowed(res.data.amount);
        setLoanName(res.data.name)
      })
      .catch((err) => console.log(err));
  };


  // async function loadPayments(id) {
  //   const query = {loan_id: id}
  //   console.log(query);
  //   paymentAPIFunctions
  //     .getLoanPayments(query)
  //     .then((res) => {
  //       console.log(res);

  //       let paymentTotal = 0;
  //       // let specificPayments = [];
  //       let resultsArray = res.data;
  //       // format date of every payment
  //       resultsArray.map((result) => (result.date = formatDate(result.date)));
  //       // for each payment, push matching loan_id to specific payments, and total their balances
  //       // resultsArray.forEach((result) => {
  //       //   if (result.loan_id === loanId) {
  //       //     // push the matching payments to the array
  //       //     specificPayments.push(result);
  //       //     paymentTotal += result.balance;
  //       //     console.log("For Each");
  //       //   }
  //       // });
  //       // setpayments lists only the matching loan_id payments
  //       setPayments(resultsArray);
  //       // setTotal adds the result.balance for each maching loan_id payment
  //       setTotalPaid(paymentTotal);
  //       console.log(paymentTotal);
  //       // console.log(payments[0]);
  //       // loadRemaining();
  //       var result = amountBorrowed - paymentTotal;
  //       console.log(amountBorrowed, paymentTotal, result);
  //       setRemainingBalance(result);
  //       if (!payment) {
  //         setPayment(payments[0]);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }








  // load all users loans
  async function loadPayments(thisquery) {
    // const query = {loan_id: id}
    console.log(thisquery);
    paymentAPIFunctions
      .getPayments(thisquery)
      .then((res) => {
        console.log(res);

        let paymentTotal = 0;
        let specificPayments = [];
        let resultsArray = res.data;
        // format date of every payment
        resultsArray.map((result) => (result.date = formatDate(result.date)));
        // for each payment, push matching loan_id to specific payments, and total their balances
        resultsArray.forEach((result) => {
          if (result.loan_id === loanid) {
            // push the matching payments to the array
            specificPayments.push(result);
            paymentTotal += result.balance;
            console.log("For Each");
          }
        });
        // setpayments lists only the matching loan_id payments
        setPayments(specificPayments);
        // setTotal adds the result.balance for each maching loan_id payment
        setTotalPaid(paymentTotal);
        console.log(paymentTotal);
        // console.log(payments[0]);
        // loadRemaining();
        var result = amountBorrowed - paymentTotal;
        console.log(amountBorrowed, paymentTotal, result);
        setRemainingBalance(result);
        if (!payment) {
          setPayment(payments[0]);
        }
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
        // setFormObject();
      })
      .catch((err) => console.log(err));
  }

  // updates component state when the user types in input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // when form is submitted, use APIFunctions saveLoan method to save loan data, then reload loans from db
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
        .then((res) => {
          loadPayments();
        })
        .catch((err) => console.log(err));
    }
  }

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
      <p>Total {loanName} Loan Amount: ${amountBorrowed}</p>
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
