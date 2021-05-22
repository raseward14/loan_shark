const router = require("express").Router();
const loansController = require("../../controllers/loansController");

// Matches with "/api/loans"
router.route("/")
  .get(loansController.findAll)
//   .post(loansController.create);

// Matches with "/api/loans/:id"
// router
//   .route("/:id")
//   .get(loansController.findById)
//   .put(loansController.update)
//   .delete(loansController.remove);

module.exports = router;