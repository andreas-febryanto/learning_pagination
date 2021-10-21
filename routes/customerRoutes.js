const router = require("express").Router();
const customerController = require("../controllers/customerController");
const auth = require("../middlewares/auth");
const authzAdmin = require("../middlewares/authzAdmin");

router.post("/login", customerController.login);
router.use(auth);
router.use(authzAdmin);
router.get("/", customerController.getAll);
router.post("/", customerController.insertCustomer);
router.get("/:id", customerController.getDetail);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
