// TARJETAS EVENTOS
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response => response.json())
.then(dataEvents => {
    dataApi = dataEvents.events
    //console.log(dataApi);
    pastEvents(dataEvents.currentDate, dataApi)
    createChecks(dataApi)
})

function pastEvents(currentD, apiEvents){
    const eventosIndex = document.querySelector('#eventos');

    let currentDate = currentD;
    console.log(currentDate);
    let eventos = "";

    for (const evento of apiEvents) {
        if(evento.date < currentDate) {
        eventos += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="card mb-3">
            <img src="${evento.image}" alt="" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="price m-0">Price U$S ${evento.price}</p>
                    <a href="details.html?id=${evento._id}" class="btn btn-primary"><span>More Info</span></a>
                </div>                            
            </div>
        </div>
    </div>`;

    } else {
        `<h3>There is no events</h3>`
    }
    }
    eventosIndex.innerHTML = eventos
}

function createChecks(apiEvents){
    
        let formCategories = document.getElementById("categories")
        let setCategories = new Set(); //devuelve los elementos no duplicados
        let categories = apiEvents.forEach((cat)=> {
            setCategories.add(cat.category);
        })
        setCategories.forEach((category)=> {
            formCategories.innerHTML += `<div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}" onclick="estaActivo(${category})">
            <label class="form-check-label" >${category}</label>
            </div>`
            //estaActivo(category)
        })
    }