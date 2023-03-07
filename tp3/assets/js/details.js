const queryString = location.search

const params = new URLSearchParams(queryString)


//let params = new URLSearchParams(document.location.search);
const id_event = params.get("id")

const evento = data.events.find(data => data._id == id_event)
console.log(evento);

const container = document.querySelector('#eventos')

container.innerHTML = `
        <div class="card mb-4">
            <img src="${evento.image}" alt="" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                

                <div class="d-flex justify-content-between align-items-center">
                    <p class="price m-0">Price U$S ${evento.price}</p>
                    <a href="reservas.html?id=${evento._id}" class="btn btn-primary me-2"><span>Reservar</span></a>
                </div>
                                               
            </div>
            <div class="card-footer ">
                    <h4>Another information</h4> 
                    <div class="d-flex justify-content-between align-items-center text-white">
                        <p><i class="fa-regular fa-calendar"></i> ${evento.date}</p>
                        <p><i class="fa-solid fa-location-dot"></i> ${evento.place}</p>
                        <p><i class="fa-solid fa-building-columns"></i> ${evento.category}</p>
                    </div>
                </div>   
        </div>`