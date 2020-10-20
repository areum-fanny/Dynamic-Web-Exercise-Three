const express = require("express");

const router = express.Router();

router.get('/', (req,res) => res.send("<h1>Routed About</h1>"));
router.get('/me', (req,res) => res.send("<h1>Routed About me</h1>"));

module.exports = router;