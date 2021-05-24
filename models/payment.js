const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Loan = require('./loan');

const paymentSchema = new Schema({
    balance: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    },
    loan_id: {
        type: Schema.Types.ObjectId,
        ref: Loan
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;