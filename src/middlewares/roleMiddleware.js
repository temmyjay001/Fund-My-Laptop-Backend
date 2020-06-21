const jwt = require("jsonwebtoken");
const response = require("../utils/response");
const User = require("../models/User");

module.exports.rolecheck = () => {
  return async (req, res, next) => {
    if (req.headers.authorization) {
      const decoded = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET
      );
      const user = await User.findOne({ _id: decoded.id });

      if (!user)
        return res.staus(401).send(response("Access Denied", null, false));
      else if (user.role !== "admin")
        return res.status(401).send(response("Access Denied", null, false));

      next();
    } else
      res.status(404).json({
        message: "Authorization token required",
        data: null,
        success: false,
      });
  };
};
