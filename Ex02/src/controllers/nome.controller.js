const concatenar = (req, res) => {
  const { nome, sobrenome} = req.body;

  res.status(201).json({nome_completo: nomeCompleto}.end());
};


module.exports = {
  concatenar,
};