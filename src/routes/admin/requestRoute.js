const router = require("express").Router();
const { authorise } = require("../../middlewares/authenticatorMiddleware");
const AdminRequestCtrl = require("./../../controllers/admin/RequestController");

module.exports = () => {
  router.get("/", authorise(), AdminRequestCtrl.getRequests);
  router.get("/completed", authorise(), AdminRequestCtrl.getCompletedRequests);
  router.get("/suspended", authorise(), AdminRequestCtrl.getSuspendedRequests);
  router.patch("/suspend", authorise(), AdminRequestCtrl.suspendRequest);
  router.get(
    "/active/not-funded",
    authorise(),
    AdminRequestCtrl.getactiveButNotFundedRequests
  );
  router.get(
    "/active/funded",
    authorise(),
    AdminRequestCtrl.getActiveAndFundedRequests
  );
  return router;
};
