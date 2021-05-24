const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./user');


const loanSchema = new Schema({
      name: {
        type: String,
        required: "Choose an name",
      },
      date: {
        type: Date,
        default: Date.now,
      },
      amount: {
        type: Number,
        required: "Choose a loan amount",
      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: User
      }
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
