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

function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)) {
        eventsDropdown.forEach((typeEvent) => {
            html.addEventListener(typeEvent, handleOutsideClick)
        })
        element.setAttribute(outside, '')
    }

    function handleOutsideClick(e) {
        if(!element.contains(e.target)) {
            element.removeAttribute(outside)
            eventsDropdown.forEach((typeEvent) => {
                html.removeEventListener(typeEvent, handleOutsideClick)
            })
            callback();
        }
    }
}

