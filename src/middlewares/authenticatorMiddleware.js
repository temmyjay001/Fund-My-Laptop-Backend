const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CustomError = require("./../utils/CustomError");

module.exports.authorise = () => {
  return async (req, res, next) => {
    if (req.headers.authorization) {
      const decoded = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET
      );

      const user = await User.findOne({ _id: decoded.id });
      //check if user exists and active
      if (!user) throw new CustomError("unauthorized user", 401);

      req.token = token;
      req.user = user;
      next();
    } else {
      res.status(404).json({
        message: "Authorization token required",
        data: null,
        success: false,
      });
    }
    // const response = require("../utils/response");
    // const jwtSecret = process.env.JWT_SECRET;
    // if (!user) {
    //   throw new Error();
    // }
    // const token = req.header("Authorization").replace("Bearer", "").trim();
    // const decoded = jwt.verify(token, jwtSecret);
    // if (!token) {
    //   res.send(response("Please authenticate!", error));
    // }
  };
};
