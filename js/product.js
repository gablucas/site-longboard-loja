import initDropDown from "./modules/global/dropdown.js"
import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import { showProduct } from "./modules/produto/showProduct.js";
import addItemCart from "./modules/produto/addItemCart.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js";
import { favoriteProduct } from "./modules/produto/favoriteProduct.js";
import { validateLogin } from "./modules/global/validateLogin.js";
import { menuMobile } from "./modules/global/menuMobile.js";
 
initDropDown();
loggedUser();
exitAccount();
showProduct();
addItemCart();
showQuantityItensCart();
favoriteProduct();
validateLogin();
menuMobile()



