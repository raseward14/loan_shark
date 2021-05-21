const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSharkSchema = new Schema({
  titleOfLoan: { type: String, required: true },
  amountOfLoan: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Loan = mongoose.model("Loan", loanSharkSchema);

module.exports = Loan;