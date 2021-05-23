const seedLoans = require('./loan-seed');
const seedPayments = require('./payment-seed');
const seedUsers = require('./user-seed');
const db = require('../models');

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/loanShark", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
)

const seedAll = async () => {
    await db.User.remove({}).then(() => db.User.collection.insertMany(seedUsers)).then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    });

    await db.Loan.remove({}).then(() => db.Loan.collection.insertMany(seedLoans)).then(data => {
        console.log(data.result.n + " records inserted!");
    });

    await db.Payment.remove({}).then(() => db.Payment.collection.insertMany(seedPayments)).then(data => {
        console.log(data.result.n + " records inserted!");
    });
};

seedAll();