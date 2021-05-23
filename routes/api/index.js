const router = require("express").Router();

const homeRoute = require("/");

const profileRoute = require("/:id/profile");

// CMM - Detailed loan info for each individual logged in user accessable via a tab on their Profile page?

const loanRoute = require("/:id/profile/loans");


router.use("/", homeRoute);
router.use("/:id/profile", profileRoute);
router.use("/:id/profile/loans", loanRoute);

module.exports = router;