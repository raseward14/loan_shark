import axios from "axios";

// get all loans
const getLoans = () => {
  return axios.get("/api/loans");
};
// get one loan
const getLoanById = (id) => {
  return axios.get("/api/loans" + id);
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
// get all payments
const getPayments = () => {
  return axios.get("/api/payments");
};
// get a payment
const getPaymentById = (id) => {
  return axios.get("/api/payments/" + id);
};
// save a payment
// payment data is balance number
// date and loan_id are set
const savePayment = (paymentData) => {
    return axios.post("/api/payments", paymentData);
  };
// delete a payment
const deletePayment = (id) => {
    return axios.delete("/api/loans/" + id);
  };
// update a payment
// updatePayment: function(id) {
//     return axios.put("/api/payments/" + id)
// },

export {
  getLoans,
  getLoanById,
  saveLoan,
  deleteLoan,
  getPaymentById,
  getPayments,
  savePayment,
  deletePayment
};
