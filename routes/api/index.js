const router = require("express").Router();
<<<<<<< HEAD

const homeRoute = require("/");

const profileRoute = require("/:id/profile");

// CMM - Detailed loan info for each individual logged in user accessable via a tab on their Profile page?

const loanRoute = require("/:id/profile/loans");


router.use("/", homeRoute);
router.use("/:id/profile", profileRoute);
router.use("/:id/profile/loans", loanRoute);
=======
const loanRoutes = require("./loans");
const paymentRoutes = require("./payments");

// Loan routes
router.use("/loans", loanRoutes);
router.use("/payments", paymentRoutes);
>>>>>>> 88a993baa48549b037cd97be0e7626fe75e88b70

module.exports = router;