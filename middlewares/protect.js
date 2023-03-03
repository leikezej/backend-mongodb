const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    // req.headers.authorization.startsWith("Bearer")
    req.headers.authorization.startsWith('x-access-token')
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};
