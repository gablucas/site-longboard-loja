/** INDICA O ITEM ATUAL SELECIONADO DO MENU SECUNDARIO */
export default function menuProducts() {
  const menuSecundario = document.querySelectorAll('.menu-secundario a')
  menuSecundario.forEach((menu) => {
    const href = menu.href;
    const url = location.href;
  
    if(url.includes(href)) {
      menu.classList.add('ativo')
    }
  })
}
