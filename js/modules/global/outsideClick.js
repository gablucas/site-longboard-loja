export default function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)) {
        ['click', 'touchstart'].forEach((typeEvent) => {
            html.addEventListener(typeEvent, handleOutsideClick);
        });
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(e) {
        if(!element.contains(e.target)) {
            element.removeAttribute(outside);
            ['click', 'touchstart'].forEach((typeEvent) => {
                console.log('oi')
                html.removeEventListener(typeEvent, handleOutsideClick);
            });
            callback();
        }
    }
}
