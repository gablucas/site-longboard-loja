export default function showDataform(user) {
  const element = document.querySelector('[data-register="user-data"]');

  element.innerHTML = ` <li><span class="font-2-s-m">Nome:</span> ${user.nome}</li>
                        <li><span class="font-2-s-m">Sobrenome:</span> ${user.sobrenome}</li>
                        <li><span class="font-2-s-m">CPF:</span> ${user.cpf}</li>
                        <li><span class="font-2-s-m">Email:</span> ${user.email}</li>
                        <li><span class="font-2-s-m">Nascimento:</span> ${user.nascimento}</li>
                        <li><span class="font-2-s-m">Endereço:</span> ${user.endereco.endereco_rua} - ${user.endereco.endereco_numero} <br> ${user.endereco.endereco_cidade}, ${user.endereco.endereco_bairro}, ${user.endereco.endereco_estado} - ${user.endereco.endereco_cep} - ${user.endereco.endereco_complemento}</li>`
}