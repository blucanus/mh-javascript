// TARJETAS EVENTOS

const eventosIndex = document.querySelector('#eventos');

let eventos = "";

for (const evento of data.events) {
    eventos += `<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div class="card">
        <img src="${evento.image}" alt="" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="price m-0">Price U$S ${evento.price}</p>
                <a href="#" class="btn btn-primary"><span>More Info</span></a>
            </div>                            
        </div>
    </div>
</div>`;

}
eventosIndex.innerHTML = eventos
