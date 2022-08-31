import { accounts } from "../global/accounts.js";
import cartStorage from "./cartStorage.js";
import showCartItens from "./showCartItens.js";



const loggedUser = accounts.loggedUser();

export default function finalizePayment() {
  cartStorage((cart) => {
    cart.forEach((item) => {
      accounts.updateUser('pedidos', 'push', item);
    })
  })

  localStorage.cart = [];
  showCartItens();
}

