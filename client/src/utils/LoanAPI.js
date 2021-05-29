import axios from "axios";

// get all loans
const getLoans = () => {
  return axios.get("/api/loans");
};
// get one loan
const getLoanById = (id) => {
  return axios.get("/api/loans/" + id);
};
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
  getLoans,
  getLoanById,
  saveLoan,
  deleteLoan,
};
