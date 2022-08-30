export const accounts = {

  getUsers() {
    if(localStorage.accounts) {
      return JSON.parse(localStorage.accounts);
     }
  },

  setUsers(callback) {
    callback(this.user)
  },

  loggedUser() {
    if(localStorage.loggedUser) {
      return this.getUsers().find(user => user.email === localStorage.loggedUser);
    }
  }
}

