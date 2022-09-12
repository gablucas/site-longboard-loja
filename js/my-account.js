import loggedUser from "./modules/global/loggedUser.js";
import { showInformation } from "./modules/myaccount/myinformation.js";
import { editInformation } from "./modules/myaccount/editMyinfo.js";
import selectedOption from "./modules/myaccount/selectedOption.js";

if(!localStorage.loggedUser) {
  window.location.href = "index.html";
}

loggedUser();
selectedOption();
showInformation();
editInformation();