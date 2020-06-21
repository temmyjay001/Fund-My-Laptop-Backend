const router = require("express").Router();

const { authorise } = require("../middlewares/authenticatorMiddleware");
const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommentdationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
const trendRoute = require("./trendRoute");
const adminRequestRoute = require("./admin/requestRoute");

// router.get("/test", (req, res) => res.send("Yeah it works!"));

router.use("/users", userRoute);
router.use("/request", authorise(), requestRoute);
router.use("/vouch", recommentdationRoute);
router.use("/payment", authorise(), paymentRoute);
router.use("/trend", trendRoute);
router.use("/admin/request", authorise(), adminRequestRoute);

module.exports = router;
