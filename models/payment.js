const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Loan = require('./loan');

const paymentSchema = new Schema({
    _id: {
        type: Number,
        primaryKey: false,
    },
    balance: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    },
    loan_id: {
        ref: "Loan",
        type: Schema.Types.ObjectId
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;