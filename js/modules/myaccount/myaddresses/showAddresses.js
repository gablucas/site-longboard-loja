import { accounts } from "../../global/accounts.js";

  const addressesContainer = document.querySelector('[data-myaddresess="container"]');
  const addresses = accounts.loggedUser().enderecos;

  export function showAddresses() {

      addresses.forEach((address) => {
        const newDiv =  document.createElement('div');
        newDiv.classList.add('endereco', 'mini-container')
    
        if (address.main === true) {
          newDiv.classList.add('principal')
        }

        newDiv.innerHTML = `<span data-myaddresses="set-main" class="btn-container new-main font-2-xxxs-u">Definir como endereço principal</span>
        <ul class="dados-endereco font-2-xs-m cor-10">
        <li>Identificação: <span class="font-2-xs">${address.identificacao}</span></li>
        <li>CEP: <span class="font-2-xs">${address.cep}</span></li>
        <li>Rua: <span class="font-2-xs">${address.rua}</span></li>
        <li>Número: <span class="font-2-xs">${address.numero}</span></li>
        <li>Cidade: <span class="font-2-xs">${address.cidade}</span></li>
        <li>Bairro: <span class="font-2-xs">${address.bairro}</span></li>
        <li>Estado: <span class="font-2-xs">${address.estado}</span></li>
        <li>Complemento: <span class="font-2-xs">${address.complemento}</span></li>
      </ul>
    
      <span data-myaddresses="edit-active" class="btn-container editar font-2-xxxs-u">Editar</span>
      <span data-myaddresses="edit-delete-active" class="btn-container excluir font-2-xxxs-u">Excluir</span>
      <span data-myaddresses="edit-save" class="btn-container save font-2-xxxs-u">Salvar</span>
      <span data-myaddresses="edit-cancel" class="btn-container cancel font-2-xxxs-u">Cancelar</span>`
    
        addressesContainer.appendChild(newDiv);
      });
  }
