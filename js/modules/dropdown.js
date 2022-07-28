import outsideClick from "./outside-click.js";

export default function initDropDown() {
    const dropdown = document.querySelectorAll('[data-dropdown]');
    const eventsDropdown = ['touchstart', 'click']
    
    dropdown.forEach((menu) => {
        eventsDropdown.forEach((typeEvent) => {
            menu.addEventListener(typeEvent, handleClick)
        })
    })
    
    function handleClick(e) {
        this.classList.add('active');
        outsideClick(this, ()=> {
            this.classList.remove('active')
        })
    }
}




