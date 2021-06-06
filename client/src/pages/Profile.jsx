import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "reactstrap";

//--------------------------------------------------//
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import * as loanAPIFunctions from "../utils/LoanAPI";
import * as paymentAPIFunctions from "../utils/PaymentAPI";


// Commponents Import
import V_PieChart from "../components/V_PieChart/index";
import V_BarGraph from "../components/V_BarGraph/index";
import V_ProgressWheel from "../components/V_ProgressWheel";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";

import logo from "../img/loansharklogo.png";

function Profile() {
    const [loans, setLoans] = useState([]);
    const [payments, setPayments] = useState([]);
    const [count, setCount] = useState();
    const [loan, setLoan] = useState();
    const [totalDebt, setTotalDebt] = useState();
    const [formObject, setFormObject] = useState({});
  
    // loadPayments sets the count of all payments made, and the total from those payments
    // loadLoans sets
    useEffect(() => {
        loadPayments();
        loadLoans();
        loadLoan();
    }, [loans]);
  
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

  // load all users loans
  function loadPayments() {
    // get all payments from db
    paymentAPIFunctions
      .getPayments()
      .then((res) => {
        // initialize a payment count, total, and array
        let count = 0;
        let paymentTotal = 0;
        let paymentResultsArray = res.data;
        // for each payment, increase count by 1, and add the payment to the total
        paymentResultsArray.forEach((result) => {
            paymentTotal += result.balance;
            count++;
        });
        // setPayments with total of all payments, setCount with a count of every payment
        setPayments(paymentTotal);
        setCount(count);
      })
      .catch((err) => console.log(err));
  };

  
    // loan all users loans
    function loadLoans() {
      // gets all loans from db
      loanAPIFunctions
        .getLoans()
        .then((res) => {
          // initialize a loan total, and array
          let loanTotal = 0;
          let loanResultsArray = res.data;
          // format each results date, and sum all loans
          loanResultsArray.map((result) => (result.date = formatDate(result.date)));
          loanResultsArray.forEach((result) => {
            loanTotal += result.amount;
          })
          // setLoans lists all loans from the array, setTotalDebt with the sum of all loans
          setLoans(loanResultsArray);
          setTotalDebt(loanTotal);
          if(!loan) {
            setLoan(loans[0]);
          } 
        })
        .catch((err) => console.log(err));
    }
  
    function loadLoan() {
      if (!loan) {
        setLoan(loans[0]);
      }
    }
  
    // delete loan
    function deleteLoan(id) {
      loanAPIFunctions
        .deleteLoan(id)
        .then(() => loadLoans())
        .catch((err) => console.log(err));
    }
  
    // get loan by id, format the date
    function handleClick(id) {
      loanAPIFunctions
        .getLoanById(id)
        .then((res) => {
          var result = formatDate(res.data.date);
          res.data.date = result;
          setLoan(res.data);
          // setFormObject();
        })
        .catch((err) => console.log(err));
    }
  
    // updates component state when the user types in input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value });
    }
  
    // when form is submitted, save loan amount and name
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.name && formObject.amount) {
        loanAPIFunctions
          .saveLoan({
            name: formObject.name,
            amount: formObject.amount,
            user_id: "60adb73bc60ad5599803dbfd"
          })
          .then((res) => loadLoans())
          .catch((err) => console.log(err));
      }
    }

  return (
    <>
      <Container className="themed-container" fluid={true}>
        <Row xs="12">
          <Col className="sidebar">
            <img className="logo-size" src={logo} alt="Logo" />
            <h5>Current Loans</h5>
            <List>
        {loans.map((loan) => (
          <ListItem key={loan._id}>
            <strong onClick={() => handleClick(loan._id)}>
              {loan.name} for {loan.amount}
            </strong>
            <DeleteBtn onClick={() => deleteLoan(loan._id)} />
          </ListItem>
        ))}
      </List>
          </Col>

          <Col className="content" xs="9">
          {loan ? (
            <div>
            <h1>{loan.name}</h1>
            <h3>Loan total = ${loan.amount}</h3>
            <h4>{loan.date}</h4>
            <Link to={"/payments/" + loan._id} >
            <strong>{loan.name} payments</strong>
            </Link>
            </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
      <form>
        <Input
          onChange={handleInputChange}
          name="name"
          placeholder="Name of Loan (required)"
        />
        <Input
          onChange={handleInputChange}
          name="amount"
          placeholder="Amount (required)"
        />
        <FormBtn
          disabled={!(formObject.name && formObject.amount)}
          onClick={handleFormSubmit}
        >
          Save Loan
        </FormBtn>
      </form>
            
            <div className="profile-flex-box">
              {/* <div className="graph-size">
                <V_PieChart />
              </div>
              <div className="graph-size">
                <V_BarGraph />
              </div> */}
              <div className="graph-size">
                <V_ProgressWheel />
              </div>
            </div>

            <Row>
              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Total Debt: {totalDebt}</p>
                  <p>Total Payments: {payments}</p>
                  <hr className="hr" />
                  <h2>{count}</h2>
                </Card>
              </Col>

              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Intrest Rate</p>
                  <hr className="hr" />
                  <h2>3.6%</h2>
                </Card>
              </Col>

              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Lenght</p>
                  <hr className="hr" />
                  <h2>3 Years</h2>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
