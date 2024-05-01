const express = require("express");

const router = express.Router();
const userSignUpController = require("../controller/userSignUp");
const userSingInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const AllUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");

router.post("/signup", userSignUpController);
router.post("/signin", userSingInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin panel
router.get("/all-user", authToken, AllUsers);
router.post("/update-user", authToken, updateUser);

module.exports = router;
