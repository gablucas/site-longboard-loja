import loggedUser from "./modules/global/loggedUser.js";
import selectedOption from "./modules/myaccount/selectedOption.js";
import { showInformation } from "./modules/myaccount/myinformation/showInformation.js";
import { editInformation } from "./modules/myaccount/myinformation/editMyinfo.js";
import { showAddresses } from "./modules/myaccount/myaddresses/showAddresses.js";
import { verifyLocation } from "./modules/global/verifyLocation.js";
import { registerAddress } from "./modules/myaccount/myaddresses/registerAdress.js";
import { mainAddress } from "./modules/myaccount/myaddresses/mainAddress.js";
import { deleteAddress } from "./modules/myaccount/myaddresses/deleteAddress.js";


if(!localStorage.loggedUser) {
  window.location.href = "index.html";
}

// Funções da página MINHA CONTA
loggedUser();
selectedOption();

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
}

// Funções da pagina NOVO ENDEREÇO
if(verifyLocation('new-address.html')) {
  registerAddress();
}



