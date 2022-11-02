export async function fetchProducts(callback) {
  const promise = await fetch('https://gablucas.github.io/site-longboard-loja/products.json');
  const productsJson = await promise.json();

  callback(productsJson)
}