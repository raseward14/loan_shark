import axios from "axios";

// get all loans
// const getLoans = (query) => {
//   return axios.get("/api/loans?=user_id=" + query);
// };
// get LoanByUserId can be queried
const getLoansByUserId = () => {
  return axios.get("/api/loans")
};
// get one loan
const getLoanById = (id) => {
  return axios.get("/api/loans/" + id);
};
// get all loans for user
// const getTheseLoans = () => {
//   return axios.get("/api/loans");
// };
// save a new loan
// loan is name, amount
// date and user_id are already set
const saveLoan = (loanData) => {
  return axios.post("/api/loans", loanData);
};

// edit a loan
// updateLoan: function(id) {
//     return axios.put("/api/loans/" + id)
// },

// delete loan
const deleteLoan = (id) => {
  return axios.delete("/api/loans/" + id);
};

export {
  // getLoans,
  getLoansByUserId,
  getLoanById,
  saveLoan,
  deleteLoan,
};
