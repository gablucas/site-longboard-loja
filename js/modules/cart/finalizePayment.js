import { accounts } from "../global/accounts.js";
import { showQuantityItensCart } from "../global/showQuantityItensCart.js";
import { cartStorage } from "./cartStorage.js";
import { showCartItens } from "./showCartItens.js";
import { fetchProducts } from "../global/fetchProducts.js";

export function finalizePayment() {

  // Grava a data da compra
  const getDate = new Date();
  const orderDate = `${String(getDate.getDate()).padStart(2,0)}/${String(getDate.getMonth()).padStart(2,0)}/${getDate.getFullYear()}`;

  // Pegar informações do formulario
  const forms = document.querySelectorAll('form');
  const [address, frete, payment] = forms;
  const orderAddress = [...address].find((input) => input.checked === true).parentElement.getAttribute('id');

  // Interage com os itens do carrinho
  cartStorage((cart) => {

    // Dados do pedido
    const orderInfo = {
      orderNumber: "P0000001",
      orderDate,
      orderValue: 0,
      orderState: "Aguardando confirmação pagamento",
      orderAddress,
    }


    // Array do pedido
    const order = [];

    // Fetch dos produtos
    fetchProducts((products) => {
      
      // Soma o valor total de todos os itens do carrinho
      orderInfo.orderValue = cart.map((cartItem) => {
        return products[cartItem.type].find(product => product.id === cartItem.id).price * cartItem.quantity;
      }).reduce((anterior, atual) => {
        return anterior + atual;
      })

      // Coloca os dados do produto dentro do array do pedido
      order.push(orderInfo);

      // Coloca todos os produtos dentro do array do pedido
      cart.forEach((item) => {
        order.push(item);
      })

      // Atualiza os dados do usuario no localStorage
      accounts.updateUser('pedidos', 'unshift', order);
    })
  })

  localStorage.cart = [];
  showCartItens();
  showQuantityItensCart();
}

