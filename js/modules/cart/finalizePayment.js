import { accounts } from "../global/accounts.js";
import cartStorage from "./cartStorage.js";
import showCartItens from "./showCartItens.js";

export default function finalizePayment() {

  const getDate = new Date();
  const orderDate = `${String(getDate.getDate()).padStart(2,0)}/${String(getDate.getMonth()).padStart(2,0)}/${getDate.getFullYear()}`;

  cartStorage((cart) => {
    cart.forEach((item) => {
      item.orderdate = orderDate;
      accounts.updateUser('pedidos', 'push', item);
    })
  })

  localStorage.cart = [];
  showCartItens();
}

