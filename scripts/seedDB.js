const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/loanShark"
);



const loanSharkSeed = [
  {
    user_name: "David",
    password: "12345678",
    email: "david@gmail.com",
    loans: [
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        totalAmount: 11500,
        balanceRemaining: 11000,
        balancePaid: 500,
      },
    ],
  },

  {
    user_name: "Caitlin",
    password: "abcdefgh",
    email: "caitlin@gmail.com",
    loans: [
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        totalAmount: 10000,
        balanceRemaining: 9500,
        balancePaid: 500,
      },
    ],
  },

  {
    user_name: "Richard",
    password: "abcd1234",
    email: "richard@gmail.com",
    loans: [
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        totalAmount: 10000,
        balanceRemaining: 9800,
        balancePaid: 200,
      },
      {
        name: "Nissan 350Z",
        date: "May 20, 2021",
        totalAmount: 15000,
        balanceRemaining: 10000,
        balancePaid: 5000,
      },
      {
        name: "Subaru BRZ",
        date: "May 10, 2021",
        totalAmount: 20000,
        balanceRemaining: 15000,
        balancePaid: 5000,
      },
    ],
  },

];

db.Loan
  .remove({})
  .then(() => db.Loan.collection.insertMany(loanSharkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });