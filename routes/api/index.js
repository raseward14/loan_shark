const router = require("express").Router();
const loanRoutes = require("./loans");

// Book routes
router.use("/loans", loanRoutes);

module.exports = router;