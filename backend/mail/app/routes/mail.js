// Import des modules
const express = require("express");
const router = express.Router();

const mailCtrl = require("../controllers/mail");

// Time Middleware
router.use((req, res, next) => {
    const event = new Date();
    console.log(`MAIL TIME:`, event.toString());
    next();
});

router.post("/", mailCtrl.sendMail);

module.exports = router;
