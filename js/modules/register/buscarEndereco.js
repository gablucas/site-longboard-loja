export default function buscarEndereco(input) {
      // Buscar dados de endereço
      input.cep.addEventListener('change', buscarEndereco) 
      async function buscarEndereco(inp) {
        const requisitarEndereco = fetch(`https://viacep.com.br/ws/${inp.target.value}/json`);
        const endereco = await (await requisitarEndereco).json()
        input.rua.value = endereco.logradouro;
        input.cidade.value = endereco.localidade;
        input.bairro.value = endereco.bairro;
        input.estado.value = endereco.uf;
      }
  }