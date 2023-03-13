module.exports = {
  getNomeAleatorio: (req, res) => {
    const nomes = [
      "João Silva",
      "Maria Santos",
      "José Oliveira",
      "Aline Souza",
    ];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    res.json({ nome: nomeAleatorio });
  },
};
