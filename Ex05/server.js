const express = require("express");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/tarefa", tarefaRoutes);
app.post("/nova", novaRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
