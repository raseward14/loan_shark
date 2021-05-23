const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/loanShark"), {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// };

const paymentSeed = [
  {
    balance: 500,
    date: "May 5, 2021",
    user_id: 0,
    loan_id: 0,
  },
  {
    balance: 500,
    date: "May 6, 2021",
    user_id: 0,
    loan_id: 0,
  },
  {
    balance: 500,
    date: "May 7, 2021",
    user_id: 0,
    loan_id: 0,
  },
  {
    balance: 500,
    date: "May 8, 2021",
    user_id: 1,
    loan_id: 0,
  },
  {
    balance: 500,
    date: "May 9, 2021",
    user_id: 2,
    loan_id: 0,
  },
  {
    balance: 500,
    date: "May 10, 2021",
    user_id: 2,
    loan_id: 1,
  },
];

db.Payment.remove({})
  .then(() => db.Payment.collection.insertMany(paymentSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
