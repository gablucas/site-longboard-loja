import { fetchProducts } from '../global/fetchProducts.js';
import { verifyLocation } from '../global/verifyLocation.js';

export async function showProducts() {
  const list = document.querySelector('[data-products]')
  const productType = list.getAttribute('data-products');
  
  fetchProducts((productsJSON) => {
    const products = productsJSON[productType];

    products.forEach((product) => {
      
      // Mostra os shapes da aba home
      if(verifyLocation('index.html')) {
        list.innerHTML += `<li class="${product.modality} active"><a href="./produto/shapes.html?type=shapes&id=${product.id}"><img src="./${product.images[0]}" alt="" width="360" height="360"><h3 class="font-1-s cor-10">${product.name}</h3></a>
        </li>`;
  
      // Mostra os shapes da aba produtos
      } else if(productType === "shapes") {
        list.innerHTML += `<li class="${product.modality} ${product.mount} tamanho4 ativo"><a href="../produto/shapes.html?type=shapes&id=${product.id}"><img src="../${product.images[0]}" alt="" width="260" height="260"><h3 class="font-1-s cor-10">${product.name}</h3></a>
        </li>`;
      } else {
        console.log('precisa adicionar estes produtos')
      }
    })
  })
}