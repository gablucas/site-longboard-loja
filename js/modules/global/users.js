import loggedUser from "./loggedUser.js";

const account = [];

export default account;

export function getStorageUsers() {

  Object.keys(localStorage).forEach((user) => {
    if(user !== "loggedUser") {
      account.push(JSON.parse(localStorage[user]))
    }
  })
}

console.log(account)





