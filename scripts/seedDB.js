const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/loanShark"
);



const loanSharkSeed = [
  {
    titleOfLoan: "DU Bootcamp",
    amountOfLoan: "11,500"
    // date: new Date(Date.now())
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