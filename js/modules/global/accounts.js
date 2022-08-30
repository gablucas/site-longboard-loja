let accounts;

export function getStorageAccounts(callback) {
  if(localStorage.accounts) {
    accounts = JSON.parse(localStorage.accounts);
  }

  if(callback) {
    callback(accounts)
  }

  return accounts;
}





