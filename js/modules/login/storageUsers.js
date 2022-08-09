import account from "../global/users.js"

export default function storageUsers() {
  Object.keys(localStorage).forEach((user) => {
    account.push(JSON.parse(localStorage[user]))
  })
}