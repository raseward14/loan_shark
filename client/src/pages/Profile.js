import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import LoanDetail from "../components/LoanDetail";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import V_PieChart from "../components/V_PieChart/index";
import * as APIFunctions from "../utils/LoanAPI";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";
import V_BarGraph from "../components/V_BarGraph/index";
import "./style.css";

// VICTORY STUFF
// import React from "react";
// import * as V from "victory";

function Profile() {
  const [loans, setLoans] = useState([]);
  const [loan, setLoan] = useState("");
  const [formObject, setFormObject] = useState({});

  // Load all loans and store them with setLoans
  useEffect(() => {
    loadLoans();
    if (!loan) {
      setLoan(loans[0])
    };
  }, [loan, loans]);

  // loan all users loans
  function loadLoans() {
    APIFunctions.getLoans()
      .then((res) => setLoans(res.data))
      .catch((err) => console.log(err));
  }

  // delete loan
  function deleteLoan(id) {
    APIFunctions.deleteLoan(id)
      .then((res) => loadLoans())
      .catch((err) => console.log(err));
  }

  // expand clicked loan
  function handleClick(id) {
    console.log(id);
    APIFunctions.getLoanById(id)
    
      .then((res) => setLoan(res.data), console.log(loan.date))
      // .then(formatDate(loan.date))
      .catch((err) => console.log(err));
  }

  // updates component state when the user types in input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // when form is submitted, use APIFunctions save loan method to save loan data, then reload loans from db
  function handleFormSubmit(event) {
    event.prevent.default();
    if (formObject.name && formObject.amount) {
      APIFunctions.saveLoan({
        name: formObject.name,
        date: Date.now,
        amount: formObject.amount,
        // user_id: user._id
      })
        .then((res) => loadLoans())
        .catch((err) => console.log(err));
    }
  }

  function formatDate(date) {
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

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const yr = date.getFullYear();
    const mthIndex = date.getMonth();
    const mthName = months[mthIndex];
    const day = date.getDate();
    const wkDayIndex = date.getDay();
    const wkDayName = days[wkDayIndex];

    const formatted = `${wkDayName}, ${day} ${mthName} ${yr}`;
    setLoan({ ...loan, date: formatted })
    console.log(formatted);
    // return formatted;
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
        <LoanDetail name={loan.name} date={loan.date} amount={loan.amount} />
      ) : (
        <h3>No Results to Display</h3>
      )}

      <div className="profile-flex-box">
        <V_PieChart />
        <V_BarGraph />
      </div>
      {/* <V_ProgressWheel /> */}
      <form>
        <Input
          onChange={handleInputChange}
          name="name"
          placeholder="Name of Loan"
        />
        <Input
          onChange={handleInputChange}
          name="amount"
          placeholder="Amount"
        />
        <FormBtn
          disabled={!(formObject.name && formObject.amount)}
          onClick={handleFormSubmit}
        >
          Save Loan
        </FormBtn>
      </form>
    </div>
  );
}

export default Profile;
