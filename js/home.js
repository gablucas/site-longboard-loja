import initDropDown from "./modules/global/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHomeFilter from "./modules/home-filter.js";
import loggedUser from "./modules/global/loggedUser.js";
import showProducts from "./modules/products/showProducts.js";

initDropDown();
initMenuMobile();
loggedUser();
showProducts();
initHomeFilter();

fetch('products.json')
.then(response => response.json())
.then(json => console.log(json))

