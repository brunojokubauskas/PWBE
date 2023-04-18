class Bonificacao {
  constructor(i) {
      this.matricula = i.matricula;
      this.nome = i.nome;
      this.admissao = i.admissao;
      this.salario = i.salario;
      this.pagamento = i.pagamento;
      this.desempenho = i.desempenho;
      this.bonificacao = this.calcBonificacao();
  }

  // Métodos CRUD
  create() {
      return `INSERT INTO bonificacoes (nome, admissao, salario, pagamento, desempenho, bonificacao) 
              VALUES ('${this.nome}', '${this.admissao}', ${this.salario}, CURDATE(), ${this.desempenho}, ${this.bonificacao})`;
  }

  read() {
      if (this.matricula === undefined) {
          return `SELECT * FROM bonificacoes`;
      } else {
          return `SELECT * FROM bonificacoes WHERE matricula = ${this.matricula}`;
      }
  }

  update() {
      return `UPDATE bonificacoes SET nome = '${this.nome}', admissao = '${this.admissao}', salario = ${this.salario}, pagamento = '${this.pagamento}', desempenho = ${this.desempenho} WHERE matricula = ${this.matricula}`;
  }

  delete() {
      return `DELETE FROM bonificacoes WHERE matricula = ${this.matricula}`;
  }

  // Métodos de cálculo
  calcAnos() {
      let admissao = new Date(this.admissao);
      let hoje = new Date();
      let difTempo = Math.abs(admissao - hoje);
      let anos = Math.floor(difTempo / (1000 * 60 * 60 * 24 * 365));
      return anos;
  }

  calcBonificacao() {
      return (this.salario * 2 / 100) * this.calcAnos() * this.desempenho;
  }
}

const modelarLista = (lista) => {
  let bonificacoes = [];
  for (let bonificacao of lista) {
      bonificacoes.push(new Bonificacao(bonificacao));
  }
  return bonificacoes;
};

module.exports = { Bonificacao, modelarLista };
