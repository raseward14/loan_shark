const router = require("express").Router();
const loanRoutes = require("./loans");
const paymentRoutes = require("./payments");

// Loan routes
router.use("/loans", loanRoutes);
router.use("/payments", paymentRoutes);

module.exports = router;