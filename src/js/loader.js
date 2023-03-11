const loaderImg = document.querySelector('.loader')
const loader = (e) => {
    if (e) {
        loaderImg.classList.remove('dd_type')
    } else {
        loaderImg.classList.add('dd_type')
    }
}
export default loader