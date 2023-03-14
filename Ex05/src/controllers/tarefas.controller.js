const tarefas = [
  { id: 1, descricao: "Comprar leite", concluida: false },
  { id: 2, descricao: "Pagar contas", concluida: false },
  { id: 3, descricao: "Lavar roupa", concluida: true },
];

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});
