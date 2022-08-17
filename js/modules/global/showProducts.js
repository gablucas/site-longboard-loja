const list = document.querySelector('[data-products]')
const productType = list.getAttribute('data-products');

export default async function showProducts() {
  const promise = fetch('../../../products.json');
  const productsJson = await (await promise).json();
  const products = productsJson[productType];

  
  products.forEach((product) => {
    
    // Mostra os shapes da aba home
    if(productType === "shapes" && list.getAttribute('class').includes("home")) {
      list.innerHTML += `<li class="${product.modality} active"><a href="./"><img src="./${product.images[0]}" alt="" width="360" height="360"><h3 class="font-1-s cor-10">${product.name}</h3></a>
      </li>`;

    // Mostra os shapes da aba produtos
    } else if(productType === "shapes") {
      list.innerHTML += `<li class="${product.modality} ${product.mount} topmount tamanho4 ativo"><a href="../../produtos/shapes/matahari.html"><img src="../../${product.images[0]}" alt="" width="260" height="260"><h3 class="font-1-s cor-10">${product.name}</h3></a>
      </li>`;
    }
  })
}