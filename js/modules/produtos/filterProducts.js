import { ElementHandler } from '../global/elementHandler.js';

const elementHandler = new ElementHandler();
const botoes = document.querySelectorAll('.filtro button');

export function filterProducts() {
  
  /** FILTRAR OS PRODUTOS POR SUAS CARACTERISTICAS */
  botoes.forEach((botao) => {
    botao.addEventListener('click', filtroProdutos)
  })

  function filtroProdutos(event) {
    const produtos = document.querySelectorAll('.produtos li');
    const botaoSelecionado = event.currentTarget;
    const botaoID = botaoSelecionado.getAttribute('id');

    // Selecionar botão
    botoes.forEach((botao) => {
      if(botao.classList.contains('selecionado')) {
        botao.classList.remove('selecionado');

      } else if(botaoSelecionado === botao) {
        botaoSelecionado.classList.add('selecionado');
      }
    })

    // Filtrar produtos
    produtos.forEach((produto) => {

      if(produto.classList.contains(botaoID)) {
        produto.classList.add('ativo');
        
      } else if(!botaoSelecionado.classList.contains('selecionado')) {
        produto.classList.add('ativo');

      } else {
        produto.classList.remove('ativo');
      }
    })
  }
}

export function filterButton() {
  const btnMenu = document.querySelector('[data-filter="button"]');
  const btnOptions = document.querySelectorAll('[data-filter="button-options"]');

  // Adiciona evento de touch no botão FILTRO
  function openFilter() {
    elementHandler.toggle('[data-filter="list"]', 'data-show');
    btnOptions.forEach((btn) => {
      elementHandler.remove(btn.lastElementChild, 'data-show')
    })
  }

  btnMenu.addEventListener('touchstart', openFilter)

  // Adiciona evento de touch a cada item do menu do filtro
  function openOptions(e) {
    if(e.target.parentElement === this) {
      this.classList.toggle('selected');
      const showElement = e.currentTarget.lastElementChild;
      elementHandler.toggle(showElement, 'data-show');
    }
  }

  btnOptions.forEach((btn) => {
    btn.addEventListener('touchstart', openOptions)
  })
}

