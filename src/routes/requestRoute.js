const router = require("express").Router();
const { authorise } = require("../middlewares/authenticatorMiddleware");
const RequestCtrl = require("./../controllers/RequestController");

module.exports = () => {
  router.get("/:requestId", authorise(), RequestCtrl.findById);
  router.post("/", authorise(), RequestCtrl.create);
  router.put("/:requestId", authorise(), RequestCtrl.update);
  router.delete("/:requestId", authorise(), RequestCtrl.delete);

  router.get("/", authorise(), RequestCtrl.getRequests);

  return router;
};
