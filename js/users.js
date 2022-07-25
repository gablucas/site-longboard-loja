const account = [];

function createAccount(email, password, nome, sobrenome, nascimento, cpf, cep, rua, numero, bairro, cidade, estado, complemento) {
  const obj = {
    email: email,
    password: password,
    nome: nome,
    sobrenome: sobrenome,
    nascimento: nascimento,
    cpf: cpf,
    endereco: [],
  }

  const teste = [cep, rua, numero, bairro, cidade, estado, complemento]
  obj.endereco.push(teste);

  account.push(obj)
}

createAccount("gabriel@lucas.com", "123456", "Gabriel", "Lucas", "1996", "99999999999", "8900000", "teste", "teste", "teste", "teste", "teste", "teste",)
