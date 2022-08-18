export default function showProduct() {
  const dataProduct = document.querySelectorAll('[data-product]');
  const parametros = new URLSearchParams(location.search);
  parametros.forEach((teste) => {
    console.log(teste)
  })
}