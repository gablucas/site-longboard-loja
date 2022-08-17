const productsHome = document.querySelector('[data-products="shapes-home"');

export default async function showProducts() {
  const promise = fetch('../../../products.json');
  const productsJson = await (await promise).json();
  const shapes = await productsJson.shapes;
  
   shapes.forEach((shape) => {
    productsHome.innerHTML += `<li class="${shape.modality} active"><a href="./"><img src="${shape.images[0]}" alt="" width="360" height="360"><h3 class="font-1-s cor-10">${shape.name}</h3></a>
    </li>`
  })

  
}