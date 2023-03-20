const express = require("express");
const cors = require("cors");
const nomesController = require("./src/controllers/nome.controller");
const app = express();

app.use(cors());

app.use("/nome", nomeRoutes);
app.get("/nome", nomesController.getNomeAleatorio);
app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
