import { accounts } from "../global/accounts.js";

const personalData = document.querySelectorAll('[data-myaccount^="data"]');

export function showInformation() {
  [...personalData].forEach((data) => {

    // Utilizado regex para separar as palavras separadas com _ e pegar a segunda palavra
    const property = data.getAttribute('data-myaccount').replace(/\w+_(\w+)/, '$1')
    data.innerText = accounts.loggedUser()[property];
  }) 
}