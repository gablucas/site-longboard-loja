export function mainAddress() {
  const addresses = document.querySelectorAll('[data-myaddresses="set-main"]');

  console.log(addressesContainer)

  function setMainAddress({ currentTarget }) {

    // Remove a classe de endereço principal antigo
    const actualMain = [...addresses].find((address) => address.parentElement.classList.contains('principal'));
    actualMain.parentElement.classList.remove('principal')

    // Adiciona um novo endereço principal
    const container = currentTarget.parentElement;
    container.classList.add('principal');
  }

 addresses.forEach((address) => {
  address.addEventListener('click', setMainAddress)
 })
}