const router = require("express").Router();
const { User, Loan } = require('../../models')
const registerController = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/register")
.post(registerController.create);


module.exports = router;