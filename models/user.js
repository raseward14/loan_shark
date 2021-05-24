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

const userSchema = new Schema({
  user_name: {
    type: String,
    allowNull: false,
    defaultValue: false,
  },
  password: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
