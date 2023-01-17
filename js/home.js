import { loggedUser } from "./modules/global/loggedUser.js";
import { exitAccount } from "./modules/global/exitAccount.js";
import { dropDown } from "./modules/global/dropdown.js";
import { menuMobile } from "./modules/global/menuMobile.js";
import { filterShapesHome } from "./modules/home/filterShapesHome.js";
import { showProducts } from "./modules/produtos/showProducts.js";
import { showQuantityItensCart } from "./modules/global/showQuantityItensCart.js";

showProducts();
loggedUser();
exitAccount();
dropDown();
menuMobile();
filterShapesHome();
showQuantityItensCart();

