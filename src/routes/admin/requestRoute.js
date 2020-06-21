const router = require("express").Router();
const AdminRequestCtrl = require("./../../controllers/admin/RequestController");

router.get("/", AdminRequestCtrl.getRequests);
router.get("/completed", AdminRequestCtrl.getCompletedRequests);
router.get("/suspended", AdminRequestCtrl.getSuspendedRequests);
router.patch("/suspend", AdminRequestCtrl.suspendRequest);
router.get(
  "/active/not-funded",
  AdminRequestCtrl.getactiveButNotFundedRequests
);
router.get("/active/funded", AdminRequestCtrl.getActiveAndFundedRequests);

module.exports = router;
