function errorUI() {
    const container = document.querySelector('.wrapper')
    container.innerHTML = `
    <div class="error">
    <img src="https://em-content.zobj.net/thumbs/160/apple/155/confused-face_1f615.png" alt="emoji" class="sad"/>
    <h2 class="error__title">No Definitions Found</h2>
    <p class="error__desc">Sorry pal, we couldn't find definitions for the word you were looking for. You
        can try the search again at later time or head to the web instead.</p>
    </div>
    `;
}

export default errorUI;