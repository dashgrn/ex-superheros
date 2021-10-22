let templateCard = document.getElementById('template-card').content
let fragment = document.createDocumentFragment()
let main = document.getElementById('items')
let boton = document.getElementById('btnBuscar')

const getData = async () => {
    let url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
    let res = await fetch(url)
    let data = await res.json()
    let {results} = data
    // console.log(results)
    return results
}

const showData = async () => {
    let data = await getData()
    data.forEach(hero => {
        let {superhero, image} = hero;
        templateCard.querySelector('h5').textContent = superhero
        templateCard.querySelector('img').setAttribute('src', image)
        let clone = templateCard.cloneNode(true) // indicamos que clonamos
        fragment.appendChild(clone)
    });
    main.appendChild(fragment)
    console.log(data)
}

document.addEventListener('DOMContentLoaded', showData)


boton.addEventListener('click', async () => {
    let query = document.getElementById('inputBuscar').value
    console.log(query)
    let data = await getData()
    let search = data.filter(hero => hero.superhero.toLowerCase() === query.toLowerCase())
    console.log(search)
    search.forEach(hero => {
        let {superhero, image} = hero;
        templateCard.querySelector('h5').textContent = superhero;
        templateCard.querySelector('img').setAttribute('src', image)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.innerHTML = ''
    items.appendChild(fragment)
})