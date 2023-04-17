const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/tarefa", (req, res) => {
  // lógica para a rota "/tarefa"
});
app.post("/nova", (req, res) => {
  // lógica para a rota "/nova"
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});