import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showCartItens from "./modules/cart/showCartItens.js";
import selectAddress from "./modules/cart/selectAddress.js";
import selectShipping from "./modules/cart/selectShipping.js";
import editAddress from "./modules/cart/editAddress.js";
import purchaseSummary from "./modules/cart/purchaseSummary.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js";
import validateCart from "./modules/cart/validateCart.js";

loggedUser();
exitAccount();
showCartItens();
selectAddress();
selectShipping();
editAddress();
purchaseSummary();
showQuantityItensCart();
validateCart();


