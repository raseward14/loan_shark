import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard/index";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import V_PieChart from "../components/V_PieChart/index";
import * as APIFunctions from "../utils/LoanAPI";
// import { deleteLoan, getLoans } from "../utils/API";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";
import V_BarGraph from "../components/V_BarGraph/index";
import "./style.css";

// VICTORY STUFF
// import React from "react";
// import * as V from "victory";

function Profile() {
  const [loans, setLoans] = useState([]);
  // const [payments, setPayments] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all loans and store them with setLoans
  useEffect(() => {
    loadLoans();
  });

  function loadLoans() {
    APIFunctions.getLoans()
    // getLoans()
      .then((res) => setLoans(res.data), console.log(loans))
      .catch((err) => console.log(err));
  };

  function deleteLoan(id) {
    APIFunctions.deleteLoan(id)
    .then(res => loadLoans())
    .catch(err => console.log(err));
  };

  // updates component state when the user types in input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value })
  };

  // when form is submitted, use APIFunctions save loan method to save loan data, then reload loans from db
  function handleFormSubmit(event) {
    event.prevent.default();
    if(formObject.name && formObject.amount) {
      APIFunctions.saveLoan({
        name: formObject.name,
        date: Date.now,
        amount: formObject.amount,
        // user_id: user._id
      })
      .then(res => loadLoans())
      .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <List>
        {loans.map(loan => (
        <ListItem key={loan._id}>
          <Link to={"/loans/" + loan._id}>
          <strong>
            {loan.name} for {loan.amount}
          </strong>
                    </Link>
          
          <DeleteBtn onClick={() => deleteLoan(loan._id)} />
        </ListItem>
        ))}
      </List>
      <ProfileCard />
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
