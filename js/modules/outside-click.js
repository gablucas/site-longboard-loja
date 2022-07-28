export default function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        ['click', 'touchStart'].forEach((typeEvent) => {
            html.addEventListener(typeEvent, handleOutsideClick);
        });
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(e) {
        if (!element.contains(e.target)) {
            element.removeAttribute(outside);
            ['click', 'touchStart'].forEach((typeEvent) => {
                html.removeEventListener(typeEvent, handleOutsideClick);
            });
            callback();
        }
    }
}
