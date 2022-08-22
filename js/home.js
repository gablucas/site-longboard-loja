import initDropDown from "./modules/global/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHomeFilter from "./modules/home-filter.js";
import loggedUser from "./modules/global/loggedUser.js";
import exitAccount from "./modules/global/exitAccount.js";
import showProducts from "./modules/produtos/showProducts.js";

initDropDown();
initMenuMobile();
loggedUser();
showProducts();
initHomeFilter();
exitAccount();

fetch('products.json')
.then(response => response.json())
.then(json => console.log(json))

