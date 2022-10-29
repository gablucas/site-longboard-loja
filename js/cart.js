import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showCartItens from "./modules/cart/showCartItens.js";
import selectShipping from "./modules/cart/selectShipping.js";
import editAddress from "./modules/cart/editAddress.js";
import purchaseSummary from "./modules/cart/purchaseSummary.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js";
import validateCart from "./modules/cart/validateCart.js";
import { emptyCart } from "./modules/cart/emptyCart.js";
import { showAddressesCart } from "./modules/cart/showAddressesCart.js";
import selectAddress from "./modules/cart/selectAddress.js";
import { validateLogin } from "./modules/global/validateLogin.js";
import { callbackModal } from "./modules/global/modal.js";
import { menuMobile } from "./modules/global/menuMobile.js";

loggedUser();
menuMobile();
showCartItens();
showAddressesCart();
selectAddress();
exitAccount();
selectShipping();
editAddress();
purchaseSummary();
showQuantityItensCart();
validateCart();
emptyCart();
callbackModal('[data-modal="button"]', '[data-modal="container"]');
validateLogin();


