const express = require("express");
const cors =  require("cors");  

//Para utilizar o express...
const app = express();

const nomeRoutes = require("./src/routes/nome.routes");
app.use(express.json()); 

app.use(cors()); 
app.use("/nome", nomeRoutes); 

app.listen(3000, () => {
  console.log("Server Running on port 3000.");
});
