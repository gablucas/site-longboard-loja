import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js";
import showProducts from "./modules/produtos/showProducts.js";
import filterProducts from "./modules/produtos/filterProducts.js";
import { verifyLocation } from "./modules/global/verifyLocation.js";
import menuMobile from './modules/global/menuMobile.js';

if (!verifyLocation('produtos.html')) {
  showProducts();
  filterProducts();
}

loggedUser();
menuMobile();
showQuantityItensCart();
exitAccount();

