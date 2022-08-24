import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import initDropDown from "./modules/global/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHomeFilter from "./modules/home-filter.js";
import showProducts from "./modules/produtos/showProducts.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"

loggedUser();
exitAccount();
initDropDown();
initMenuMobile();
showProducts();
initHomeFilter();
showQuantityItensCart();


