const express = require('express');
const Especialidades = require('../controllers/especialidades.controller');
const router = express.Router();

router.post('/especialidades', Especialidades.cadastra);
router.get('/especialidades', Especialidades.lista);

module.exports = router;
