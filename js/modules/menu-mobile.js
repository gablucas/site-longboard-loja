export default function initMenuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const listMobile = document.querySelector('[data-menu="list"]');
  
  menuMobile.addEventListener('touchstart', openMenuMobile);
  function openMenuMobile() {
    listMobile.classList.add('active');
  }
}
