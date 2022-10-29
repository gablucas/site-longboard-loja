import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js";
import { menuMobile } from "./modules/global/menuMobile.js";

loggedUser();
menuMobile()
showQuantityItensCart();
exitAccount();

import { showInformation } from "./modules/myaccount/myinformation/showInformation.js";
import { editInformation } from "./modules/myaccount/myinformation/editMyinfo.js";
import { showAddresses } from "./modules/myaccount/myaddresses/showAddresses.js";
import { verifyLocation } from "./modules/global/verifyLocation.js";
import { registerAddress } from "./modules/myaccount/myaddresses/registerAdress.js";
import { mainAddress } from "./modules/myaccount/myaddresses/mainAddress.js";
import { deleteAddress } from "./modules/myaccount/myaddresses/deleteAddress.js";
import { editAddress, insertAddressForm, saveAddressChange } from "./modules/myaccount/myaddresses/editAddress.js";
import { showOrders } from "./modules/myaccount/myorders/showOrders.js";
import { showFavorites } from "./modules/myaccount/favorites/showFavorites.js";

if(!localStorage.loggedUser) {
  window.location.href = "index.html";
}

// Funções da pagina MINHAS INFORMAÇÕES
if(verifyLocation('my-informations.html')) {
  showInformation();
  editInformation();
}

// Funções da pagina MEUS ENDEREÇOS
if(verifyLocation('my-addresses.html')) {
  showAddresses();
  mainAddress();
  deleteAddress();
  editAddress();
}

// Funções da pagina NOVO ENDEREÇO
if(verifyLocation('new-address.html')) {
  registerAddress();
}

// Funções da pagina EDITAR ENDEREÇO
if(verifyLocation('edit-address.html')) {
  insertAddressForm();
  saveAddressChange();
}

// Funções da pagina MEUS PEDIDOS
if(verifyLocation('my-orders.html')) {
  showOrders();
}

// Funções da pagina MEUS FAVORITOS
if(verifyLocation('my-favorites.html')) {
  showFavorites();
}
