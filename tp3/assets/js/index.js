// TARJETAS EVENTOS

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

buscador.addEventListener("keyup", ()=>{
    /* const eventoFiltrado = cardEvents().filter((eventos)=>eventos.name.includes(buscador.value))
    console.log(eventoFiltrado); */
    const eventosFiltrados = data.events.filter((eventos)=>eventos.name.toLowerCase().startsWith(buscador.value))
    //console.log(eventosFiltrados);
    cardEvents(eventosFiltrados, "#eventos");
})