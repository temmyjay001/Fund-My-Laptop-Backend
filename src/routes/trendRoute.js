const router = require("express").Router();
const TrendCtrl = require("../controllers/TrendController");

router.get("/", TrendCtrl.getTrends);

module.exports = router;
