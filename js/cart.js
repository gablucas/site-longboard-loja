import { loggedUser } from "./modules/global/loggedUser.js";
import { exitAccount } from "./modules/global/exitAccount.js";
import { showCartItens } from "./modules/cart/showCartItens.js";
import { selectShipping } from "./modules/cart/selectShipping.js";
import { editShipping } from "./modules/cart/editShipping.js";
import { purchaseSummary } from "./modules/cart/purchaseSummary.js";
import { showQuantityItensCart } from "./modules/global/showQuantityItensCart.js";
import { validateCart } from "./modules/cart/validateCart.js";
import { emptyCart } from "./modules/cart/emptyCart.js";
import { showAddressesCart } from "./modules/cart/showAddressesCart.js";
import { selectAddress } from "./modules/cart/selectAddress.js";
import { validateLogin } from "./modules/global/validateLogin.js";
import { callbackModal } from "./modules/global/modal.js";
import { menuMobile } from "./modules/global/menuMobile.js";
import { dropDown } from "./modules/global/dropdown.js";

loggedUser();
menuMobile();
dropDown();
showCartItens();
showAddressesCart();
selectAddress();
exitAccount();
selectShipping();
editShipping();
purchaseSummary();
showQuantityItensCart();
validateCart();
emptyCart();
callbackModal('[data-modal="button"]', '[data-modal="container"]');
validateLogin();


