let arrayPast = []
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response => response.json())
.then(data => {
    arrayPast = past(data.events, data.currentDate)
    console.log(arrayPast)
    //let percentage = asistance(arrayPast)
    //let capacityEvent = capacity(arrayPast)
    printTable(results(assistance(arrayPast), assistance(arrayPast).reverse(), capacity(arrayPast)), 'pastEvents')

    printTable(dataTabl(eventosFuturos))
})
    

function past(data, currentDate) {
    return data.filter(event => event.date < currentDate)
}
//evento con mayor porcentaje de asistencia
function assistance(arrPast) {
    const arrayPercentage = arrPast.map(event => {
        return {
            attendance: (event.assistance / event.capacity) * 100,
            nameEvent: event.name
        }
    })
    arrayPercentage.sort((a, b) => b.attendance - a.attendance)
    console.log(arrayPercentage);

    return arrayPercentage
}
function capacity(arrPast){
    const arrayCapacity = arrayPast.map(event => {
        return {
            capacity: event.capacity,
            nameEventCapacity: event.name
        }
    })
    arrayCapacity.sort((a, b) => b.capacity - a.capacity)
    console.log(arrayCapacity);
    return arrayCapacity
}
function results(highestPercentage, lowestPercentage, largestCapacity){
    let all = {
        highestPercentage: highestPercentage[0].nameEvent,
        lowestPercentage: lowestPercentage[0].name,
        largestPercentage: largestCapacity[0].name
    }
    return all
}
function printTable(results, container){
    const table = document.getElementById(container)
    table.innerHTML = `
    <td>${results.highestPercentage}</td>
    <td>${results.lowestPercentage}</td>
    <td>${results.largestCapacity}</td>
    `
}

function dataTable(arr){
    let categories = Array.from(new Set(arr.map(a => a.category)))
    console.log(categories);
    let eventCategories = categories.map(cate => arr.filter(event => event.category == cat))
    console.log(eventCategories);
    let result = eventCategories.map(eventCat => {
        let calculate = eventCat.reduce((acc, event) => {
            acc.category = event.category,
            acc.reveneu += event.price * (event.assistance || event.estimate);
            acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
            return acc
        })
        console.log(calculate);
    })
}

function printTable(arr, idTag) {
    const upcomingTable = document.getElementById(idTag)
    let html = arr.map(events => {
        return `
        ///// todo lo que va en html
        `
    })
}