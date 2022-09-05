import loggedUser from "./modules/global/loggedUser.js";
import { showInformation } from "./modules/myaccount/myinformation.js";
import { editInformation } from "./modules/myaccount/editMyinfo.js";
import selectedOption from "./modules/myaccount/selectedOption.js";

loggedUser();
selectedOption();
showInformation();
editInformation();