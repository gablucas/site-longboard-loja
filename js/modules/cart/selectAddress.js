//Ativar o endereço selecionado
const enderecos = document.querySelectorAll('[data-cart="address-item"]');

export default function selectAddress() {
  enderecos.forEach((item) => {
    item.addEventListener('click', addChecked)
  })
  
  function addChecked({currentTarget}) {
    
    enderecos.forEach((item) => {
      item.classList.remove('selecionado');
    })
  
    const selectedAddress = currentTarget;
    selectedAddress.classList.add('selecionado');
    selectedAddress.firstElementChild.checked = true;
  }
}