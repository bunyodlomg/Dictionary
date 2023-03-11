import fetchApi from "./request";
import updateUI from "./updateUI";
import errorUI from "./errUI";
import { emptyUI } from "./empty";

const form = document.querySelector('form')
const input = document.querySelector('.search__icon')

form.addEventListener('submit', (e) => {
    let query = form.input.value;
    e.preventDefault()
    myFunc(query)
    form.reset()
})
input.addEventListener('click', (e) => {
    let query = form.input.value;
    myFunc(query)
})
export function myFunc(query) {
    if (query.trim().length > 0) {
        fetchApi(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
            .then((data) => {
                updateUI(data[0]);
            })
            .catch((err) => {
                errorUI()
                console.log('error');
            });
    } else {
        emptyUI()
    }
}