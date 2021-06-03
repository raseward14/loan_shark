import axios from "axios";

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
    return axios.delete("/api/payments/" + id);
  };
// update a payment
// updatePayment: function(id) {
//     return axios.put("/api/payments/" + id)
// },

export {
  getPaymentById,
  getPayments,
  savePayment,
  deletePayment,
};