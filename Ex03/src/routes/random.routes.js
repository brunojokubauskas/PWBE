const express = require("express"); 
const router = express.Router(); 

const randomController = require("../controllers/random.controller");

router.get('/', randomController.getRandomNumber);
module.exports = router;