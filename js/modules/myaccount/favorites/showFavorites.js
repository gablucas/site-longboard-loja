import { accounts } from '../../global/accounts.js';
import fetchProducts from '../../global/fetchProducts.js';
import { removeFavorite } from "./removeFavorite.js";

export function showFavorites() {
  
  const favoritesContainer = document.querySelector('[data-favorites="container"]');
  const favorites = accounts.loggedUser().favorites;

  fetchProducts((products) => {
    favorites.forEach((favorite) => {
      const product = products.shapes.find((item) => item.id === favorite);

      const newDiv = document.createElement('div');
      newDiv.classList.add('favorite-product', 'mini-container');
      newDiv.setAttribute('id', favorite);
  
      newDiv.innerHTML = `
      <img src="../${product.images[0]}" width="140" alt="">
      <span class="font-2-xxxs-b-u">${product.name}</span>
      <span class="font-2-xs">R$ ${product.price}</span>
      <span data-favorites="delete" class="btn-container excluir font-2-xxxs-u">Excluir</span>`;
  
      favoritesContainer.appendChild(newDiv);
    })

    removeFavorite();
  })
}