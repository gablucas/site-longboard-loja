import outsideClick from "../outside-click.js";

export default function initDropDown() {
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




