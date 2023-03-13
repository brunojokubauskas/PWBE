const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/nome", nomeRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
