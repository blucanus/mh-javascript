// TARJETAS EVENTOS
console.log(fetch('https://mindhub-xj03.onrender.com/api/amazing'));


function cardEvents(data, selector) {

    const eventosIndex = document.querySelector(selector);
    let eventos = "";

    for (const evento of data) {
    eventos += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="card mb-3">
        <img src="${evento.image}" alt="" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="price m-0">Price U$S ${evento.price}</p>
                <a href="details.html?id=${evento._id}" class="btn btn-primary me-2"><span>More Info</span></a>
            </div>                            
        </div>
    </div>
</div>`;
}
eventosIndex.innerHTML = eventos 
} 
cardEvents(data.events, "#eventos");

let buscador = document.getElementById("search");

buscador.addEventListener("keyup", estaActivo)

let formCategories = document.getElementById("categories")
let setCategories = new Set(); //devuelve los elementos no duplicados
let categories = data.events.forEach((cat)=> {
    setCategories.add(cat.category);
})
console.log(setCategories);
setCategories.forEach((category)=> {
    formCategories.innerHTML += `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}" onclick="estaActivo()">
    <label class="form-check-label" >${category}</label>
    </div>`
    //estaActivo(category)
})
function estaActivo(){

    const categoryCheck = document.querySelectorAll("input:checked")
    let categoryString = Array.from(categoryCheck).map(c => c.value)
    console.log(categoryString);

    const categoriaElegida = data.events.filter((eventos)=>(categoryString.length == 0 || categoryString.includes(eventos.category)) && eventos.name.toLowerCase().startsWith(buscador.value))
    console.log(categoriaElegida);
   /*  if(checked){
        console.log(nombreCategory);
        console.log(categoriaElegida);
        cardEvents(categoriaElegida, "#eventos")
    }else {
        cardEvents(data.events, "#eventos");
        console.log('desactivado');
    } */

   /*  const eventosFiltrados = data.events.filter((eventos)=>eventos.name.toLowerCase().startsWith(buscador.value))*/
    cardEvents(categoriaElegida, "#eventos");
}