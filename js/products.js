import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showProducts from "./modules/produtos/showProducts.js";
import filterProducts from "./modules/produtos/filterProducts.js";
import menuProducts from "./modules/produtos/menuProducts.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"

loggedUser();
exitAccount();
showProducts();
filterProducts();
menuProducts();
showQuantityItensCart();

