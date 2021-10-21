const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAll);
router.post("/", orderController.insertOrder);
router.get("/:id", orderController.getDetail);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
