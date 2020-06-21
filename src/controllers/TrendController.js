// Requests with 200% and above recommendation count should be listed as trending.(A user needs at least 10 recommendation)

// Request the number of recommendations on a request. then compare to the pass mark and then pass

const trendServ = require("../services/TrendService");
const response = require(".././utils/response");

class TrendController {
  async getTrends(req, res) {
    // Pull from DB
    const data = await trendServ.trend();
    if (!data) res.status(404).send(response("Not Found", null, false));
    else
      res
        .status(200)
        .send(response("These are the trending request", data, true));
  }
}

module.exports = new TrendController();
