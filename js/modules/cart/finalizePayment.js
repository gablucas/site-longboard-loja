import { accounts } from "../global/accounts.js";
import showQuantityItensCart from "../global/showQuantityItensCart.js";
import cartStorage from "./cartStorage.js";
import showCartItens from "./showCartItens.js";

export default function finalizePayment() {

  const getDate = new Date();
  const orderDate = `${String(getDate.getDate()).padStart(2,0)}/${String(getDate.getMonth()).padStart(2,0)}/${getDate.getFullYear()}`;

  cartStorage((cart) => {
    const order = [];

    // VER UM MÉTODO DE SOMAR OS VALORES DE TODOS OS PRODUTOS DE UM PEDIDO
    // fetchProducts((products) => {
    //   const teste = cart.map((item) => {
    //     if (products[item.type])
    //   })
    // })

    const orderInfo = {
      orderNumber: "P0000001",
      orderDate,
      orderValue: 0,
      orderState: "Aguardando confirmação pagamento",
    }
    
    order.push(orderInfo);
    
    cart.forEach((item) => {
      order.push(item);
    })

    accounts.updateUser('pedidos', 'push', order);
  })

  localStorage.cart = [];
  showCartItens();
  showQuantityItensCart();
}

