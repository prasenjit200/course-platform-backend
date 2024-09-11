const express = require("express");
const authcontroller = require("../controllers/authController")
const router = express.Router();


router.post("/register",authcontroller.register);
router.post("/sigin",authcontroller.login);
router.get("/courses",authcontroller.course);

module.exports = router;