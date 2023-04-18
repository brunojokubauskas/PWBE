// Cria um array para armazenar os pacientes
let pacientes = [];

// Função para cadastrar um paciente
function cadastrarPaciente() {
  // Obtém os valores dos inputs
  const idade = parseInt(document.getElementById("idade").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Define o diagnóstico do IMC
  let diagnostico;
  if (imc < 18.5) {
    diagnostico = "Magreza";
  } else if (imc >= 18.5 && imc <= 24.9) {
    diagnostico = "Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    diagnostico = "Sobrepeso";
  } else if (imc >= 30 && imc <= 39.9) {
    diagnostico = "Obesidade";
  } else {
    diagnostico = "Obesidade grave";
  }

  // Cria um objeto paciente com os valores obtidos
  const paciente = {
    idade,
    altura,
    peso,
    imc,
    diagnostico,
  };

  // Adiciona o paciente ao array de pacientes
  pacientes.push(paciente);

  // Limpa os inputs
  document.getElementById("idade").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";

  // Exibe uma mensagem de sucesso
  alert("Paciente cadastrado com sucesso!");
}

// Função para alterar os dados de um paciente
function alterarPaciente(id) {
  // Obtém o paciente a ser alterado
  const paciente = pacientes[id];

  // Preenche os inputs com os valores do paciente
  document.getElementById("idade").value = paciente.idade;
  document.getElementById("altura").value = paciente.altura;
  document.getElementById("peso").value = paciente.peso;

  // Remove o paciente do array de pacientes
  pacientes.splice(id, 1);
}

// Função para excluir um paciente
function excluirPaciente(id) {
  // Remove o paciente do array de pacientes
  pacientes.splice(id, 1);

  // Atualiza a lista de pacientes
  listarPacientes();
}

// Função para listar todos os pacientes
function listarPacientes() {
  // Obtém o elemento ul que contém a lista de pacientes
  const lista = document.getElementById("lista-pacientes");

  // Limpa a lista
  lista.innerHTML = "";

  // Loop através dos pacientes e cria um li para cada um
  pacientes.forEach((paciente, id) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>Idade: ${paciente.idade} anos</span>
      <span>IMC: ${paciente.imc.toFixed(2)}</span>
      <span>Diagnóstico: ${paciente.diagnostico}</span>
      <button onclick="alterarPaciente(${id})">Alterar</button>
      <button onclick="excluirPaciente(${id})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}
