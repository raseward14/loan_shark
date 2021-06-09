import axios from "axios";

// get all payments can be queried
// on profile page, this gets ALL PAYMENTS, MAY NEED TO QUERY BY USERID
const getAllPayments = () => {
  return axios.get("/api/payments");
};
// get paymentss can be queried
const getPaymentsByLoanId = (query) => {
  return axios.get("/api/payments?loan_id=" + query);
};
// get a payment
const getPaymentById = (id) => {
  return axios.get("/api/payments/" + id);
};
// save a payment
// date and loan_id are created for us
const savePayment = (paymentData) => {
  return axios.post("/api/payments", paymentData);
};
// delete a payment
const deletePayment = (id) => {
  return axios.delete("/api/payments/" + id);
};
// update a payment
// updatePayment: function(id) {
//     return axios.put("/api/payments/" + id)
// },

export { getPaymentById, getAllPayments, savePayment, deletePayment, getPaymentsByLoanId };
