import loader from "./loader"
async function fetchApi(url) {
    loader(true)
    const req = await fetch(url)
    const data = await req.json()
    loader(false)
    console.log('loader');
    return data
}
export default fetchApi