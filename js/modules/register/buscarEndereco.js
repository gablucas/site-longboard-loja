export function buscarEndereco(input) {
      // Buscar dados de endereço
      input.endereco_cep.addEventListener('change', buscarEndereco) 
      async function buscarEndereco(inp) {
        const requisitarEndereco = fetch(`https://viacep.com.br/ws/${inp.target.value}/json`);
        const endereco = await (await requisitarEndereco).json()
        input.endereco_rua.value = endereco.logradouro;
        input.endereco_cidade.value = endereco.localidade;
        input.endereco_bairro.value = endereco.bairro;
        input.endereco_estado.value = endereco.uf;
      }
  }