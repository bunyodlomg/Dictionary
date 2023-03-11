import { myFunc } from "./form";
function updateUI(data) {
    const container = document.querySelector('.wrapper')
    const { word, phonetics, meanings, sourceUrls } = data
    container.innerHTML = `
        <div class="main">
            <div class="main__text">
                <h1 class="main__title">${word}</h1>
                <p class="transcription">${phonetics[1].text}</p>
            </div>
            <div class="main__play">
                <svg class="playBtn" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED" />
                </svg>
            </div>
        </div>
        <div class="noun">
            <div class="noun__top">
                <h2 class="noun__top--text">noun</h2>
                <hr class="noun__top--hr">
            </div>
            <div class="meaning">
                <p class="meaning__title">Meaning</p>
                <div class="info">
                    <div class="info__text">
                        
                    </div>
                </div>
                <div class="meaning__synonyms">
                    <p class="synonyms--title">Synonyms</p>
                    <div class="synonyms--link"></div>
                </div>
            </div>
        </div>
        <div class="verb">
            <div class="noun__top verb__top">
                <h2 class="noun__top--text">verb</h2>
                <hr class="noun__top--hr">
            </div>
            <p class="meaning__title">Meaning</p>
            <div class="info">
                <div class="info__text">
                </div>
            </div>
        </div>
        <hr class="hr__footer">
        <div class="source">
            <p class="source__title">Source</p>
            <a class="source__link"
                href="https://en.wiktionary.org/wiki/keyboard">https://en.wiktionary.org/wiki/keyboard
            </a>
            <img src="./images/url.svg" alt="url image" class="source__img">
        </div>
        `;

    const info__text = document.querySelector('.info__text');
    const info__text2 = document.querySelectorAll('.info__text')[1];
    const synonymsLink = document.querySelector('.synonyms--link');
    const sourceLink = document.querySelector('.source__link');
    meanings[0].definitions.forEach(e => {
        const div = document.createElement('div');
        div.innerHTML = `
            <span class="info__text--icon"></span>
            <p class="info__text--desc">${e.definition}</p>
        `
        info__text.appendChild(div)
    });
    let s = 'No synonyms',
        n = 0
    meanings[0].synonyms.forEach((e) => {
        if (e.length !== '') {
            n++
            const link = document.createElement('p')
            link.className = 'link'
            link.innerHTML = `${e} `
            console.log(e);
            synonymsLink.appendChild(link)
        }
    });
    if (!n) {
        const link = document.createElement('p')
        link.className = 'link'
        link.innerHTML = s
        synonymsLink.appendChild(link)
    }

    // 
    synonymsLink.addEventListener('click', (e) => {
        let syn = e.target.textContent;
        if (syn !== 'No synonyms') {
            myFunc(syn)
        }
    })
    // 
    meanings[1].definitions.forEach(e => {
        const div = document.createElement('div');
        div.innerHTML = `
            <span class="info__text--icon"></span>
            <p class="info__text--desc">${e.definition}</p>
        `
        info__text2.appendChild(div)
    });


    sourceLink.href = sourceUrls
    sourceLink.textContent = sourceUrls

    const playBtn = document.querySelector('.playBtn')
    playBtn.addEventListener('click', () => {
        let a = ''
        phonetics.forEach((e) => {
            if (e.audio !== '') {
                a = e.audio
            }
        })
        let audio = new Audio(a)
        playBtn.classList.add('playBtn1')
        playBtn.classList.add('playBtn2')
        audio.load()
        audio.play()

        audio.addEventListener('timeupdate', (e) => {
            let time = e.timeStamp / 100
            console.log();
            setTimeout(() => {
                playBtn.classList.remove('playBtn1')
                playBtn.classList.remove('playBtn2')
            }, time)
        });

    })
}

export default updateUI;