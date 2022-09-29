export function idGenetaror(idName, array) {
  // Pega o ID do item anterior e soma com o atual
  const idNumber = +array[array.length - 1].id.match(/\d+/g) + 1;
  return idName + idNumber;
}