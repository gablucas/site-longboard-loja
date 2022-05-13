// Mantem selecionado a seção de produtos no menu secundario
menuSecundario = document.querySelectorAll('.menu-secundario a')

function ativarMenuSecundario(link) {
  href = link.href;
  url = location.href;

  if(url.includes(href)) {
    link.classList.add('ativo')
  }
}

menuSecundario.forEach(ativarMenuSecundario)

// Filtrar os shapes pela modalidade
botaoFiltro = document.querySelectorAll('.produtos-filtro .filtro button')
shapes = document.querySelectorAll('.produtos li')

function executarFiltro(event) {
  elemento = event.currentTarget; // Armazena o elemento clicado na variavel
  classFiltro = elemento.getAttribute('class'); // Armazena a(s) classe(s) do elemento clicado na variavel


  // Pintar o botão quando clicado
  for (let i = 0; i < botaoFiltro.length; i++) {

    if(botaoFiltro[i].classList.contains('selecionado')) {
      botaoFiltro[i].classList.remove('selecionado')

    } else if(botaoFiltro[i] === elemento) {
        botaoFiltro[i].classList.add('selecionado')
    }
  }

  // Mostrar os shapes do filtro selecionado
  for (let i = 0; i < shapes.length ; i++) {
    shapes[i].classList.add('ativo');

    // Se o botão for desselecionado, mostra todos os shapes
    if(elemento.classList.contains('selecionado') === false) {
      shapes[i].classList.add('ativo');
      
    // Filtra e exibe os shapes de acordo com o filtro selecionado
    } else if(shapes[i].classList.contains(classFiltro)) {
      shapes[i].classList.add('ativo');
      
    // Remove todos os shapes que não estão de acordo com o filtro
    } else {
      shapes[i].classList.remove('ativo');
    }
  }
}

function cliqueFiltro(clique) {
  clique.addEventListener('click', executarFiltro)
}

botaoFiltro.forEach(cliqueFiltro);

