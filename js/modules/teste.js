export default async function teste(callback) {
  const promise = await fetch('https://gablucas.github.io/site-longboard-loja/products.json');
  const productsJson = await promise.json();

  callback(productsJson)
}