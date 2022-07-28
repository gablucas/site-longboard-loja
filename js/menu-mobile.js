const menuMobile = document.querySelector('[data-menu="button"]');
const listMobile = document.querySelector('[data-menu="list"]');

menuMobile.addEventListener('click', openMenuMobile);
function openMenuMobile() {
  listMobile.classList.add('active');
}