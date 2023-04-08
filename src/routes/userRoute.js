const express = require("express");
const userRoute = express.Router();

const { userLogin, userSignUp, updateUser } = require("../controllers/userController");
const { authentication } = require("../auth/authentication");



userRoute.post("/signup", userSignUp);
userRoute.post("/login", userLogin);

userRoute.put("/update-user",authentication, updateUser);


module.exports = {
    userRoute
};
