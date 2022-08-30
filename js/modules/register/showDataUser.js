export default function showDataform(user) {
  const element = document.querySelector('[data-register="user-data"]');

  element.innerHTML = ` <li><span class="font-2-s-m">Nome:</span> ${user.nome}</li>
                        <li><span class="font-2-s-m">Sobrenome:</span> ${user.sobrenome}</li>
                        <li><span class="font-2-s-m">CPF:</span> ${user.cpf}</li>
                        <li><span class="font-2-s-m">Email:</span> ${user.email}</li>
                        <li><span class="font-2-s-m">Nascimento:</span> ${user.nascimento}</li>
                        <li><span class="font-2-s-m">Endereço:</span> ${user.endereco.rua} - ${user.endereco.numero} <br> ${user.endereco.cidade}, ${user.endereco.bairro}, ${user.endereco.estado} - ${user.endereco.cep} - ${user.endereco.complemento}</li>`
}