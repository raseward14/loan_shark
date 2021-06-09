const db = require("../models");

// Defining methods for the LoansController
module.exports = {
  findById: function (req, res) {
    //   Add another param of email?
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
} 