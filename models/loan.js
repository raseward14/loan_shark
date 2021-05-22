const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// class User extends Model {
//   checkPassword(loginPw) {
//     const result = bcrypt.compareSync(loginPw, this.password);
//     console.log(result);
//     return result;
//   }
// }

const loanSharkSchema = new Schema({
  id: {
    type: Number,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: String,
    allowNull: false,
    defaultValue: false,
  },
  password: {
    type: String,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
  email: {
    type: String,
    allowNull: false,
    unique: true,
  },
  loans: [
    {
      name: {
        type: String,
        required: "Choose an name",
      },
      date: {
        type: Date,
        default: Date.now,
      },
      totalAmount: {
        type: Number,
        required: "Choose a loan amount",
      },
      balanceRemaining: {
        type: Number,
      },
      balancePaid: {
        type: Number,
      },
    },
  ],
});

const Loan = mongoose.model("Loan", loanSharkSchema);

module.exports = Loan;
