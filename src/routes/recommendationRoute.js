const router = require("express").Router();
const RecommendationCtrl = require("./../controllers/RecommendationController");

router.delete("/:recommendationId", RecommendationCtrl.delete);
router.get("/:user_id/all", RecommendationCtrl.getUserRecommendations);

module.exports = router;
