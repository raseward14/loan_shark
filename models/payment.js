const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  balance: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  loan_id: {
    ref: "Loan",
    type: Schema.Types.ObjectId,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
