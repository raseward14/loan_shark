const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/loanShark", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);



const loanSeed = [
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        amount: 11500,
        user_id: 0
      },
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        amount: 10000,
        user_id: 1
      },
      {
        name: "DU Bootcamp",
        date: "May 22, 2021",
        amount: 10000,
        user_id: 2
      },
      {
        name: "Nissan 350Z",
        date: "May 20, 2021",
        amount: 15000,
        user_id: 0
      },
      {
        name: "Subaru BRZ",
        date: "May 10, 2021",
        amount: 20000,
        user_id: 1
      },
      {
        name: "boat",
        date: "May 5, 2021",
        amount: 2000,
        user_id: 0
      },
];

db.Loan
  .remove({})
  .then(() => db.Loan.collection.insertMany(loanSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });