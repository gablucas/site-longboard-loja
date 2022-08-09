export default function changePage() {
    const links = document.querySelectorAll('a');
    
    links.forEach((link) => {
        link.addEventListener('click', handleClick)
    })
}

function handleClick(e) {
    e.preventDefault();
    fetchPage(e.target.href)
    window.history.pushState(null, null, e.target.href)
}

async function fetchPage(url) {
    const promise = fetch(url)
    const responseTXT = await (await promise).text()
    replaceContent(responseTXT)
}

function replaceContent(text) {
    document.documentElement.innerHTML = text
}

window.addEventListener("popstate", () => {
    fetchPage(window.location.href)
})

