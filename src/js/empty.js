export const emptyUI = () => {
    const container = document.querySelector('.wrapper')
    container.innerHTML = ''
    const empty = document.querySelector('.empty');
    const input = document.querySelector('input');

    input.style.border = '1px solid #FF5252';
    empty.classList.add('style', 'emptyUI');
    setTimeout(() => {
        input.style.border = '1px';
        empty.classList.remove('style', 'emptyUI');
    }, 3000)
}