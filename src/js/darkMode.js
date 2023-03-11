const modeBtn = document.querySelector('.dark-mode')
const moon = document.querySelector('.moon')
const circle = document.querySelector('.dark-mode__circle')
const dropdown = document.querySelector('.dropdown__type')

const darkMode = localStorage.getItem("mode")
if (darkMode) {
    circle.classList.toggle('dark__mode--active')
    modeBtn.style.background = '#A445ED'
    document.body.classList.toggle('darkMode');
    dropdown.style.color = '#FFFFFF'
    dropdown.style.boxShadow = `0px 5px 30px #A445ED`
    dropdown.style.background = '#1F1F1F'
}

modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    circle.classList.toggle('dark__mode--active')
    document.body.classList.toggle('darkMode')
    if (document.body.classList.contains('darkMode')) {
        moon.setAttribute('stroke', '#A445ED')
        modeBtn.style.background = '#A445ED'
        dropdown.style.color = '#FFFFFF'
        dropdown.style.boxShadow = `0px 5px 30px #A445ED`
        dropdown.style.background = '#1F1F1F'
        localStorage.setItem("mode", "darkMode")
    } else {
        moon.setAttribute('stroke', '#757575')
        modeBtn.style.background = '#757575'
        dropdown.style.color = '#050505'
        dropdown.style.boxShadow = `0px 5px 30px rgba(0, 0, 0, 0.1)`
        localStorage.setItem("mode", "")
    }
});


