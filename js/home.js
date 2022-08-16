import initDropDown from "./modules/global/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHomeFilter from "./modules/home-filter.js";
import loggedUser from "./modules/global/loggedUser.js"

initDropDown();
initMenuMobile();
initHomeFilter();
loggedUser();

fetch('products.json')
.then(response => response.json())
.then(json => console.log(json))

