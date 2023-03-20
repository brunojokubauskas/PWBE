const express = "express";
const router = express.Router();

const novaController = require("../controllers/nova.controller");

router.post("/nova", novaController.postNovaTarefa());

module.exports = router;
