const express = require("express"); 
const cors =  require("cors"); 

const app = express();
//Importando a rota... 
const randomRoutes = require("./src/routes/random.routes");
app.use(cors());
app.use('/random', randomRoutes);
app.listen(3000, () => {
  console.log("Server is Running on port 3000.")
})