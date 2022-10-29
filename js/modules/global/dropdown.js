export default function dropDown() {
    const dropdown = document.querySelectorAll('[data-dropdown]');
    
    dropdown.forEach((menu) => {
        menu.addEventListener("touchstart", handleClick)
    })
    
    function handleClick(e) {
      if(e.target.parentElement === this) {
        this.toggleAttribute('data-show');
      }
    }
}




