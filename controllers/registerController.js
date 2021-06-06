const db = require("../models");

// Defining methods for the registerController
// We need to create new user fields AND new loan fields that are connected by user_id(?)
module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Loan.create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
        }
};

