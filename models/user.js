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
    required:true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

userSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);


module.exports = User;
