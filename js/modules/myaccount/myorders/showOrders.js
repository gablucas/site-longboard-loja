import { accounts } from "../../global/accounts.js";
import fetchProducts from "../../global/fetchProducts.js";
import { ElementHandler } from "../../global/elementHandler.js";

const container = document.querySelector('[data-myorders="container"]');
const orders = accounts.loggedUser().pedidos;
const elementHandler = new ElementHandler()

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
    </div>
    
    <div class='details' data-hide></div>`

    container.appendChild(div);
  })

  const ordersElement = document.querySelectorAll('.order');

  function insertDetails(element, index) {
    const detail = element.lastElementChild;
    const order = accounts.loggedUser().pedidos[index];
    order.shift();

    fetchProducts((products) => {
      order.forEach((product) => {
        const selectedProduct = products[product.type].find((item) => item.id === product.id);
        const div = document.createElement('div');

        div.classList.add('product');
       
        div.innerHTML = `<a href=""><img src="../${selectedProduct.images[0]}" alt=""></a>
        <span>${selectedProduct.name}</span>
        <span>${product.flex}</span>
        <span>R$ ${selectedProduct.price},00</span>
        <span>${product.quantity}</span>
        <span>R$ ${selectedProduct.price * product.quantity},00</span>`;
        detail.appendChild(div);
      })
    })

    element.addEventListener('click', ({currentTarget}) => {
      const detailElement = currentTarget.lastElementChild;
      detailElement.toggleAttribute('data-hide')
    })
  }

  ordersElement.forEach(insertDetails)
}
