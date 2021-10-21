const router = require("express").Router();
const customerRouter = require("./customerRoutes");
const orderRouter = require("./orderRoutes");
const auth = require("../middlewares/auth");
const errorHandler = require("../middlewares/errorHandler");

router.use("/customers", customerRouter);
router.use(auth);
router.use("/orders", orderRouter);
router.use(errorHandler);

module.exports = router;
