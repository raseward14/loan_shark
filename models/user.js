const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const bcrypt = require('bcrypt');


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

userSchema.pre("save", function(next) {
  const bcryptSalt= 10;
  const hash = bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
});


// module.exports=mongoose.models.User || mongoose.model('User', userSchema);


const User = mongoose.model("user", userSchema);


module.exports = User;
