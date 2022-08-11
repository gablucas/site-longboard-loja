const account = [];

export default account;

export function storageUsers() {
  Object.keys(localStorage).forEach((user) => {
    account.push(JSON.parse(localStorage[user]))
  })
}





