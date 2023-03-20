const express = require("express");
const router = express.Router();

const nomeController = require("../controllers/nome.controller");

router.get("/nome", nomeController.getRandomNome());

module.exports = router;