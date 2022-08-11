export default function changeDataUser(email, data, value) {

  // Altera um dado da conta do usuario
  let account = JSON.parse(localStorage[email])
  account[data] = value;
  localStorage[email] = JSON.stringify(account)
}