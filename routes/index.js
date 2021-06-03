const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app

// CMM--If we don't have the below code it just won't show anything right? Or do we need to hit the build folder even to display our app?-- in heroku, yes we need the build to display the page

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;