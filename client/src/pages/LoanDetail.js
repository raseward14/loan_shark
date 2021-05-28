import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import * as APIFunctions from "../utils/LoanAPI";

function LoanDetail(props) {
  const [loan, setLoan] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    APIFunctions.getLoanById(id)
      .then((res) => setLoan(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Loan Detail</h1>
      <h2>{loan.name} for {loan.amount}</h2>
      <Jumbotron>
      </Jumbotron>
      <Link to="/profile">← Back to Loans</Link>
    </div>
  );
}

export default LoanDetail;
