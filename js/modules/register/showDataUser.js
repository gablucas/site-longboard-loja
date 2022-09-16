export default function showDataform(user) {
  const element = document.querySelector('[data-register="user-data"]');

  element.innerHTML = ` <li><span class="font-2-s-m">Nome:</span> ${user.nome}</li>
                        <li><span class="font-2-s-m">Sobrenome:</span> ${user.sobrenome}</li>
                        <li><span class="font-2-s-m">CPF:</span> ${user.cpf}</li>
                        <li><span class="font-2-s-m">Email:</span> ${user.email}</li>
                        <li><span class="font-2-s-m">Nascimento:</span> ${user.nascimento}</li>
                        <li><span class="font-2-s-m">Endereço:</span> ${user.endereco[0].rua} - ${user.endereco[0].numero} <br> ${user.endereco[0].cidade}, ${user.endereco[0].bairro}, ${user.endereco[0].estado} - ${user.endereco[0].cep} - ${user.endereco[0].complemento}</li>`
}