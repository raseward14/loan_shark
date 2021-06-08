const router = require("express").Router();
const { authPerson } = require("../../controllers/authController");

// const homeRoute = require("/");

// const profileRoute = require("/:id/profile");

// CMM - Detailed loan info for each individual logged in user accessable via a tab on their Profile page?

// const loanRoute = require("/:id/profile/loans");


// router.use("/", homeRoute);
// router.use("/:id/profile", profileRoute);
// router.use("/:id/profile/loans", loanRoute);



const loanRoutes = require("./loans");
const paymentRoutes = require("./payments");


const registerRoute = require("./register");
// Checking Auth status on Profile route

router.post("/profile", authPerson);

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

// Loan routes
router.use("/loans", loanRoutes);
router.use("/payments", paymentRoutes);

router.use("/register",registerRoute);

module.exports = router;