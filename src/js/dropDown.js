const f1 = document.querySelector('.f1')
const f2 = document.querySelector('.f2')
const f3 = document.querySelector('.f3')
const text = document.querySelector('.dropdown__text')

f1.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif'
    text.textContent = 'Sans-Serif'
})
f2.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'
    text.textContent = 'Serif'
})
f3.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'
    text.textContent = 'Mono'
})

f1.style.fontFamily = 'sans-serif'
f2.style.fontFamily = 'serif'
f3.style.fontFamily = 'monospace'