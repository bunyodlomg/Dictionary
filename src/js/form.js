import fetchApi from "./request";
import updateUI from "./updateUI";
import errorUI from "./errUI";
import { emptyUI } from "./empty";

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {  
    e.preventDefault()
    const query = form.input.value;
    if (query.trim().length > 0) {
        fetchApi(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
            .then((data) => {
                updateUI(data[0]);
            })
            .catch((err) => {
                errorUI()
            });
    } else {
        emptyUI()
    }
    form.reset()
})