const express = require("express");
const cors =require("cors");  
const app = express(); 

app.get('/calcular/:operacao',(req, res) => {
  const { operacao } = req.params;
  const {vali, valii } =  req.query; 

  let resultado; 
  switch(operacao) {
      case 'somar': 
          resultado = Number(vali) + Number(valii);
          break;
      case 'subtrair':
          resultado = Number(vali)  - Number(valii);
          break;
        case 'dividir': 
          resultado  = Number(vali) / Number(valii);
          break;
        case 'multiplicar':
          resultado = Number(vali) * Number(valii);
          break;
        default: 
            resultado = null;
  }

  if (resultado !== null) {
    res.json({ resultado });
  } else {
    res.status(400).json({ error: 'Operação inválida' });
  }
}) 

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.");
})
