import { loggedUser } from "./modules/global/loggedUser.js";
import { exitAccount } from "./modules/global/exitAccount.js";
import { showQuantityItensCart } from "./modules/global/showQuantityItensCart.js";
import { menuMobile } from "./modules/global/menuMobile.js";
import { dropDown } from "./modules/global/dropdown.js";
import { showInformation } from "./modules/myaccount/myinformation/showInformation.js";
import { editInformation } from "./modules/myaccount/myinformation/editMyinfo.js";
import { showAddresses } from "./modules/myaccount/myaddresses/showAddresses.js";
import { verifyLocation } from "./modules/global/verifyLocation.js";
import { registerAddress } from "./modules/myaccount/myaddresses/registerAdress.js";
import { changeAddress } from "./modules/myaccount/myaddresses/changeAddress.js";
import { showOrders } from "./modules/myaccount/myorders/showOrders.js";
import { showFavorites } from "./modules/myaccount/favorites/showFavorites.js";
import { handlerAddress } from "./modules/myaccount/myaddresses/handlerAddress.js";

loggedUser();
menuMobile();
dropDown();
showQuantityItensCart();
exitAccount();


if (!localStorage.loggedUser) {
  window.location.pathname = "/login.html";
} else {

  // Funções da pagina MINHAS INFORMAÇÕES
  if(verifyLocation('my-informations.html')) {
    showInformation();
    editInformation();
  }
  
  // Funções da pagina MEUS ENDEREÇOS
  if(verifyLocation('my-addresses.html')) {
    showAddresses();
    handlerAddress();
  }
  
  // Funções da pagina NOVO ENDEREÇO
  if(verifyLocation('new-address.html')) {
    registerAddress();
  }
  
  // Funções da pagina EDITAR ENDEREÇO
  if(verifyLocation('edit-address.html')) {
    changeAddress();
  }
  
  // Funções da pagina MEUS PEDIDOS
  if(verifyLocation('my-orders.html')) {
    showOrders();
  }
  
  // Funções da pagina MEUS FAVORITOS
  if(verifyLocation('my-favorites.html')) {
    showFavorites();
  }
}