const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Loan = require('./loan');
const User = require('./user');

const paymentSchema = new Schema({
    balance: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: Number,
        references: {
            model: User,
            key: 'id'
        }
    },
    loan_id: {
        type: Number,
        references: {
            model: Loan,
            key: 'id'
        }
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;