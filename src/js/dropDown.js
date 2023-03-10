const f1 = document.querySelector('.f1')
const f2 = document.querySelector('.f2')
const f3 = document.querySelector('.f3')
const text = document.querySelector('.dropdown__text')
let font = localStorage.getItem('font')
document.body.style.fontFamily = font
f1.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif'
    text.textContent = 'Sans-Serif'
    localStorage.setItem('font', 'Sans-Serif')

})
f2.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'
    text.textContent = 'Serif'
    localStorage.setItem('font', 'serif')
})
f3.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'
    text.textContent = 'Mono'
    localStorage.setItem('font', 'monospace')
})

f1.style.fontFamily = 'sans-serif'
f2.style.fontFamily = 'serif'
f3.style.fontFamily = 'monospace'