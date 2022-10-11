import { accounts } from "../../global/accounts.js";

const container = document.querySelector('[data-myorders="container"]');
const orders = accounts.loggedUser().pedidos;

export function showOrders() {
  orders.forEach((order) => {
    const div =  document.createElement('div');
    div.classList.add('order');

    div.innerHTML = `
    <div>
      <p class="font-2-xxxs-b-u">Número do pedido</p>
      <span class="font-2-xxs">${order[0].orderNumber}</span>
    </div>
  
    <div>
      <p class="font-2-xxxs-b-u">Data do pedido</p>
      <span class="font-2-xxs">${order[0].orderDate}</span>
    </div>
  
    <div>
      <p class="font-2-xxxs-b-u">Total pedido</p>
      <span class="font-2-xxs">R$ ${order[0].orderValue},00</span>
    </div>
  
    <div>
      <p class="font-2-xxxs-b-u">Estado do pedido</p>
      <span class="font-2-xxs">${order[0].orderState}</span>
    </div>`

    container.appendChild(div);
  })
}