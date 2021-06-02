import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import LoanDetail from "../components/LoanDetail";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import V_PieChart from "../components/V_PieChart/index";
import * as loanAPIFunctions from "../utils/LoanAPI";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";
import V_BarGraph from "../components/V_BarGraph/index";
import "./style.css";

// VICTORY STUFF
// import React from "react";
// import * as V from "victory";

function Profile() {
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
    <div>
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

      <ProfileCard />
      {loan ? (
        <LoanDetail name={loan.name} date={loan.date} amount={loan.amount}>
          <Link to={"/payments/" + loan._id} >
            <strong>{loan.name} payments</strong>
          </Link>
        </LoanDetail>
      ) : (
        <h3>No Results to Display</h3>
      )}
      <p>All Loans Total: {total}</p>
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
        <V_PieChart />
        <V_BarGraph />
      </div>
      {/* <V_ProgressWheel /> */}
    </div>
  );
}

export default Profile;
