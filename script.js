//btnTema
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
});


// evento de verificação de formulário

//criar o formulário com DOM
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form); //add o form ao Body

//input para nome
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
inputNome.minLength = 3;
form.appendChild(inputNome);

//inputEmail
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);

//inputEndereço
let inputCep = document.createElement("input");
inputCep.type = "text";
inputCep.placeholder = "Digite seu CEP";
inputCep.id = "cep";
inputCep.minLength = 8;
inputCep.maxLength = 8;
form.appendChild(inputCep);

//inputTelefone
let inputTelefone = document.createElement("input");
inputTelefone.type = "text";
inputTelefone.placeholder = "Digite seu número de telefone";
inputTelefone.id = "telefone";
inputTelefone.minLength = 10;
inputTelefone.maxLength = 11;
form.appendChild(inputTelefone);

//inputCPF
let inputCpf = document.createElement("input");
inputCpf.type = "text";
inputCpf.placeholder = "Digite seu CPF";
inputCpf.id = "cpf";
inputCpf.minLength = 11;  
inputCpf.maxLength = 11;  
form.appendChild(inputCpf);


//botão Enviar
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

// adicionar um paragrafo para enviar uma mensagem de validação

let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

//evento de validaçao do formulário
document.getElementById("formCadastro").addEventListener("submit", (event) => {
  //evitar o recarregamento da página
  event.preventDefault();
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let cep = document.getElementById("cep");
  let telefone = document.getElementById("telefone");
  let cpf = document.getElementById("cpf");
  let mensagem = document.getElementById("mensagem");

  //condição
  if (nome.value === "" || email.value === "" || cep.value === "" || telefone.value === "" || cpf.value === "") {
    mensagem.innerText = "Preencha Todos os Campos!";
    mensagem.style.color = "red";
  }
  if (isNaN(cep.value) || isNaN(cpf.value) || isNaN(telefone.value)) {
    mensagem.innerText = "CEP, CPF e telefone devem conter apenas números!";
    mensagem.style.color = "red";
    return;
  } else {
    mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
    mensagem.style.color = "green";

    //Lista de Convidados
    let lista = document.getElementById("listaConvidados");

    let card = document.createElement("div");
    card.classList.add("card-convidado");

    //Informações do card
    card.innerHTML = `<strong>Nome:</strong> ${nome.value} | <strong>Email:</strong> ${email.value} | <strong>CEP:</strong>${cep.value} | <strong>Telefone:</strong> ${telefone.value} | <strong>CPF:</strong> ${cpf.value}`;

    //botão de remover
    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";
    btnRemover.onclick = () => {
      card.remove();
    };

    card.appendChild(btnRemover);
    lista.appendChild(card);

    // limpa os campos
    nome.value = "";
    email.value = "";
    cep.value = "";
    telefone.value = "";
    cpf.value = "";
  }
  // Evento para a tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("formCadastro").reset();
    document.getElementById("mensagem").innerText = "Formulário limpo!";
    document.getElementById("mensagem").style.color = "orange";
  }
});

 });
