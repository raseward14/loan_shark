// import React, { useState, useEffect } from "react";
import Jumbo from "../components/Jumbotron/index";
import Introduction from "../components/Introduction/index";
import WhatIsLoanShark from "../components/WhatIsLoanShark/index";

// import API from "../utils/API";
// import { List, ListItem } from "../components/List";

// THIS WAS PART OF WHAT I COMMENTED OUT -----------
// import
//     // Input,
//     // TextArea,
//     FormBtn from "../components/Form";
// ----------------------------------------------------
function init() {
  // hooks
  // const [loans, setLoans] = useState([])
  // const [formObj, setFormObj] = useState([])

  // useEffect(() => {
  // loadLoans()
  // }, [])

  // function loadLoans() {
  // API.getLoans()
  // }

  // function deleteLoans() {
  // API.deleteLoans()
  // }

  // function handleInputChange() {
  // setFormObj
  // }

  // function handleFormSubmit() {
  // event.prevent.default
  // API.saveLoan()
  // }

  return (
    <div>
      <Jumbo>
        <h1>Your Loans Live Here.</h1>
      </Jumbo>
      <Introduction />
      <WhatIsLoanShark />
    </div>
  );
}

export default init;
