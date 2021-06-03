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

// Commponents Import
import V_PieChart from "../components/V_PieChart/index";
import V_BarGraph from "../components/V_BarGraph/index";
import V_ProgressWheel from "../components/V_ProgressWheel";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";

import logo from "../img/loansharklogo.png";

function Profile() {
  //----------------------------------------------------------//
  
    const [loans, setLoans] = useState([]);
    const [loan, setLoan] = useState();
    const [total, setTotal] = useState();
    const [formObject, setFormObject] = useState({});
  
    // Load all loans, and default loan and store them with setLoans
    useEffect(() => {
      let unmounted = false;
  
      if (!unmounted) {
        loadLoans();
        loadLoan();
      };
  
      return () => {
        unmounted = true;
      };
    });
  
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
    function loadLoans() {
      loanAPIFunctions
        .getLoans()
        .then((res) => {
          let loanTotal = 0;
          let resultsArray = res.data;
          resultsArray.map((result) => (result.date = formatDate(result.date)));
          resultsArray.forEach((result) => {
            loanTotal += result.amount;
          })
          // lists all loans for the user
          setLoans(resultsArray);
          // setTotal adds the result.amount of each loan for a total debt figure
          setTotal(loanTotal);
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
  
    // expand clicked loan
    function handleClick(id) {
      console.log(id);
      loanAPIFunctions
        .getLoanById(id)
        .then((res) => {
          // variable, assign, set
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
  
    // when form is submitted, use APIFunctions saveLoan method to save loan data, then reload loans from db
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
                  <p>Payments made{total}</p>
                  <hr className="hr" />
                  <h2>13</h2>
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
