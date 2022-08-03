const account = [];

function createAccount(email, password, nome, sobrenome, nascimento, cpf, cep, rua,      numero, bairro, cidade, estado, complemento) {
    const obj = {
      email: email,
      password: password,
      nome: nome,
      sobrenome: sobrenome,
      nascimento: nascimento,
      cpf: cpf,
      endereco: {
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        complemento: complemento
      },
    }

    // Registrar a conta
    account.push(obj);
  }

  createAccount("gab@dev.com", "123456", "Gabriel", "Lucas", "00/00/0000", "00000000000", "00000000", "Rua front end", "7", "Htmlandia", "JS", "Casa")
  
  export {account, createAccount}





