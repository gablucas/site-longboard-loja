const dataProduct = document.querySelectorAll('[data-product]');

export default async function showProduct() {
  const parametros = new URLSearchParams(location.search);
  const typeProduct = parametros.get('type');
  const idProduct = parametros.get('id');
  
  const promise = await fetch('../../../products.json')
  const productsJson = await promise.json();
  const product = productsJson[typeProduct].find(product => product.id === idProduct);

  dataProduct.forEach((element) => {
    const attribute = element.getAttribute('data-product');

    if(attribute.includes("dimensions")) {
      const dimensionType = attribute.split("-")[1];
      element.innerText = product.dimensions[dimensionType];

    }else if(attribute.includes("longometer")){
      const longometerType = attribute.split("-")[1];
      element.classList.add(`nota${product.longometer[longometerType]}`);

    }else if(attribute.includes('images')){
      product.images.forEach((image) => {
        element.innerHTML += `<img src="../../${image}" alt=""></img>`;
      })

      const mainImage = document.querySelector('[data-product="main-image"]');
      mainImage.setAttribute('src', `../../${product.images[0]}`);

    }else if(attribute.includes("flex")){
      product.flex.forEach((flex) => {
        element.innerHTML += `<option value="${flex.replace(" ","").toLowerCase()}">${flex}</option>`;
      });
      
    }else{
      element.innerText = product[attribute];
    }
  })
}