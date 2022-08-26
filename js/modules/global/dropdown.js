import outsideClick from "./outsideClick.js";

export default function dropDown() {
    const dropdown = document.querySelectorAll('[data-dropdown]');
    
    dropdown.forEach((menu) => {
        menu.addEventListener("touchstart", handleClick)
    })
    
    function handleClick(e) {
        this.classList.add('active');
        outsideClick(this, ()=> {
            this.classList.remove('active')
        })
    }
}




