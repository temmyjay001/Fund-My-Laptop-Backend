const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");

router.get("/", RequestCtrl.getRequests);
router.post("/", RequestCtrl.create);
router.get("/:requestId", RequestCtrl.findById);
router.put("/:requestId", RequestCtrl.update);
router.delete("/:requestId", RequestCtrl.delete);

module.exports = router;
