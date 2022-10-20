export const accounts = {

  getUsers() {
    if(localStorage.accounts) {
      return JSON.parse(localStorage.accounts);
     }
  },

  updateUser(property, updateType, newValue) {
    if(localStorage.accounts) {
      const updateUser = this.loggedUser();
      const accounts = this.getUsers();
      const index = this.getUsers().findIndex(user => user.email === localStorage.loggedUser);
      // const splitProperty = property.split('-');

      if (updateType === "add") {
        updateUser[property] = newValue;
      } else if(updateType === "push") {
        updateUser[property].push(newValue);
      } else if(updateType === "unshift") {
        updateUser[property].unshift(newValue);
      } else if(updateType === "splice") {
        updateUser[property].splice(newValue, 1);
      }

      accounts[index] = updateUser;
      localStorage.accounts = JSON.stringify(accounts);
    }
  },

  loggedUser() {
    if(localStorage.loggedUser) {
      return this.getUsers().find(user => user.email === localStorage.loggedUser);
    }
  },
}

