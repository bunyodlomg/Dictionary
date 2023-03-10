async function fetchApi(url) {
    const req = await fetch(url)
    const data = await req.json()
    return data
}
export default fetchApi