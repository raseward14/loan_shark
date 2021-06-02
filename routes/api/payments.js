const router = require("express").Router();
const paymentsController = require("../../controllers/paymentsController");

// Matches with "/api/payments"
router
  .route("/")
  .get(paymentsController.findAll)


  // .get(paymentsController.find)


  .post(paymentsController.create);

// Matches with "/api/payments/:id"
router
  .route("/:id")
  .get(paymentsController.findById)
  .put(paymentsController.update)
  .delete(paymentsController.remove);

module.exports = router;
