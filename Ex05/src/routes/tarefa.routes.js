const express = require("express");
const router = express.Router();

const tarefaController = require("../controllers/tarefas");

router.get("/tarefas", tarefaController.getNovaTerafa());

module.exports = router;
