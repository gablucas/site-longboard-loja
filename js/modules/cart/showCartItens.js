import cartStorage from "./cartStorage.js";
import removeItem from "./removeItem.js";

const cart = document.querySelector('[data-cart="products"]');

export default async function showCartItens() {
  const promise = await fetch('https://gablucas.github.io/site-longboard-loja/products.json');
  const productsJson = await promise.json();

  if(cartStorage().length) {
    const cartProducts = JSON.parse(localStorage.cart)
    cartProducts.forEach((product) => {
      const getProduct = productsJson[product.type].find((getItem) => getItem.id === product.id);
  
      cart.innerHTML +=
       `<!-- Produto no carrinho -->
       <div class="cart-product">
          <span data-cart="remove-item" class="cart-remove-item cor-8">x</span>
         <div>
           <img src="${getProduct.images[0]}" alt="" width="143" height="143">
         </div>
  
         <!-- Dados do produto -->
         <div>
           <p>Produto</p>
           <span class="font-2-xs-m-u cor-11">Shape ${getProduct.name}</span>
           <span class="font-2-xxs-u cor-6">${getProduct.brand}</span>
           <span class="font-2-xs">Dancing & Freestyle</span>
           <span class="font-2-xs">${product.flex}</span>
         </div>
         <div class="cart-product-quantity">
           <p>Quantidade</p>
           <span class="font-2-xs">${product.quantity}</span>
         </div>
         <div class="cart-product-price">
           <p>Preço</p>
           <span class="font-2-s-m cor-11">R$ ${getProduct.price * product.quantity},00</span>
           <span class="font-2-xxs cor-6">Un x R$ ${getProduct.price},00</span>
         </div>
       </div>
     </div>`
    })
  
    removeItem();
  } else {
    emptyCart();
  }
}