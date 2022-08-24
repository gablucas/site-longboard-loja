const dataProduct = document.querySelectorAll('[data-product]');
const parametros = new URLSearchParams(location.search);
const typeProduct = parametros.get('type');
const idProduct = parametros.get('id');

export default async function showProduct() {

  const promise = await fetch('https://gablucas.github.io/site-longboard-loja/products.json')
  const productsJson = await promise.json();
  const product = productsJson[typeProduct].find(product => product.id === idProduct);

  dataProduct.forEach((element) => {
    const attribute = element.getAttribute('data-product');
    const propertyName = attribute.split("-")[1];

    if(attribute.includes('id')) {
      element.setAttribute('id', `${typeProduct}-${idProduct}`)

    }else if(attribute.includes("dimensions")) {
      element.innerText = product.dimensions[propertyName];

    }else if(attribute.includes("longometer")){
      element.classList.add(`nota${product.longometer[propertyName]}`);

    }else if(attribute.includes('images')){
      product.images.forEach((image) => {
        element.innerHTML += `<img src="../../${image}" alt=""></img>`;
      })

      const mainImage = document.querySelector('[data-product="main-image"]');
      mainImage.setAttribute('src', `../${product.images[0]}`);

    }else if(attribute.includes("flex")){
      product.flex.forEach((flex) => {
        element.innerHTML += `<option value="${flex.replace(" ","").toLowerCase()}">${flex}</option>`;
      });
      
    }else{
      element.innerText = product[attribute];
    }
  })
}