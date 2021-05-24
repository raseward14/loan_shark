// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || "mongodo://localhost/loanShark", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

const userSeed = 
[
  {
    _id: 1,
    user_name: "David",
    password: "12345678",
    email: "david@gmail.com",
  },
  {
    _id: 2,
    user_name: "Caitlin",
    password: "abcdefgh",
    email: "caitlin@gmail.com",
  },
  {
    _id: 3,
    user_name: "Richard",
    password: "abcd1234",
    email: "richard@gmail.com",
  },
];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

module.exports = userSeed;

// export default userSeed;