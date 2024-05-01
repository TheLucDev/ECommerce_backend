const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(200).json({
        message: "User not logged in",
        error: true,
        success: false,
      });
    } else {
      jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
        console.log(err);
        if (err) {
          console.log("error authenticating user", err);
        }

        req.userId = decoded?._id;
        next();
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
