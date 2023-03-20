const express = require("express");
const cors = require("cors");

const EspecialidadesRouter = require("./src/routes/especialidades.routes");
const MedicosRouter = require("./src/routes/medicos.routes");
const PacientesRouter = require("./src/routes/pacientes.routes");
const AtendimentosRouter = require("./src/routes/atendimentos.routes");

const app = express();

app.use(cors());
app.use(express.json()); // Express.json() é uma função e precisa de parênteses

app.use("/especialidades", EspecialidadesRouter); // É necessário adicionar um caminho base para as rotas
app.use("/medicos", MedicosRouter); // É necessário adicionar um caminho base para as rotas
app.use("/pacientes", PacientesRouter); // É necessário adicionar um caminho base para as rotas
app.use("/atendimentos", AtendimentosRouter); // É necessário adicionar um caminho base para as rotas

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
