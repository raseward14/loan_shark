import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard/index";
import { List, ListItem } from "../components/List";
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
  // const [formObject, setFormObject] = useState({})

  // Load all loanss and store them with setLoans
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
    APIFunctions.deleteLoan(id).then(res => loadLoans())
    .catch(err => console.log(err));
  };

  return (
    <div>
      <List>
        {loans.map(loan => (
        <ListItem key={loan._id}>
          <strong>
            {loan.name} for {loan.amount}
          </strong>
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
    </div>
  );
}

export default Profile;
