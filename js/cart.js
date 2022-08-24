import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showCartItens from "./modules/cart/showCartItens.js";
import activeAddress from "./modules/cart/activeAddress.js";;
import activeShipping from "./modules/cart/activeShipping.js";
import activePayment from "./modules/cart/activePayment.js";
import editAddress from "./modules/cart/editAddress.js";
import purchaseSummary from "./modules/cart/purchaseSummary.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"

loggedUser();
exitAccount();
showCartItens();
activeAddress();
activeShipping();
activePayment();
editAddress();
purchaseSummary();
showQuantityItensCart();


