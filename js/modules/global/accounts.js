export const accounts = {

  getUsers() {
    if(localStorage.accounts) {
      return JSON.parse(localStorage.accounts);
     }
  },

  updateUser(property, updateType, newValue) {
    if(localStorage.accounts) {
      const index = this.getUsers().findIndex(user => user.email === localStorage.loggedUser);
      const updateAccount = this.getUsers();
      const updateUser = this.loggedUser();

      const splitProperty = property.split('-');

      if(updateType === "add") {
        if(splitProperty.length === 1) {
          updateUser[splitProperty[0]] = newValue;
        } else if(splitProperty.length === 2) {
          updateUser[splitProperty[0]][splitProperty[1]] = newValue;
        }

      } else if(updateType === "push") {
        updateUser[property].push(newValue);
      }

      updateAccount[index] = updateUser;
      localStorage.accounts = JSON.stringify(updateAccount);
    }
  },

  loggedUser() {
    if(localStorage.loggedUser) {
      return this.getUsers().find(user => user.email === localStorage.loggedUser);
    }
  },
}

