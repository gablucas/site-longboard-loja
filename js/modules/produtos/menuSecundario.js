/** INDICA O ITEM ATUAL SELECIONADO DO MENU SECUNDARIO */
const menuSecundario = document.querySelectorAll('.menu-secundario a')

export default function ativarMenuSecundario(link) {
  const href = link.href;
  const url = location.href;

  if(url.includes(href)) {
    link.classList.add('ativo')
  }
}

menuSecundario.forEach(ativarMenuSecundario)