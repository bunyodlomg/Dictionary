const f1 = document.querySelector('.f1')
const f2 = document.querySelector('.f2')
const f3 = document.querySelector('.f3')
const text = document.querySelector('.dropdown__text')

let font = localStorage.getItem('font')
if (font) {
    document.body.style.fontFamily = font
    switch (font) {
        case 'serif':
            text.textContent = 'Serif'
            break;
        case 'sans-serif':
            text.textContent = 'Sans-Serif'
            break;
        case 'monospace':
            text.textContent = 'Mono'
            break;
    }
}
f1.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif'
    localStorage.setItem('font', 'sans-serif')
    text.textContent = 'Sans-Serif'
})
f2.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'
    text.textContent = 'Serif'
    localStorage.setItem('font', 'serif')
})
f3.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'
    localStorage.setItem('font', 'monospace')
    text.textContent = 'Mono'
})

f1.style.fontFamily = 'sans-serif'
f2.style.fontFamily = 'serif'
f3.style.fontFamily = 'monospace'