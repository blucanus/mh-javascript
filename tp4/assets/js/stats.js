fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(res => res.json())
  .then(data => {
    let arrayPast = past(data.events, data.currentDate)
    let arrayFuture = futures(data.events, data.currentDate)
    //console.log(arrayPast)

    printT(results(assistance(arrayPast), assistance(arrayPast).reverse(), capacity(arrayPast)), "statistics")

    
    // Tabla de calculo
    
    printTable(dataTable(arrayPast), "pastEvents")
    printTable(dataTable(arrayFuture), "futureEvents")
    //dataTable(arrayFuture)

  })


function futures(data, currentDate) {
  return data.filter(evento => evento.date > currentDate)
}

function past(data, currentDate) {
  return data.filter(event => event.date < currentDate)
}

//tomando en cuenta eventos pasados.

//evento con mayor asistencia.
function assistance(arrPast) {
  const arrayPercentage = arrPast.map(event => {
    return {
      attendance: (event.assistance / event.capacity) * 100,
      nameEvent: event.name
    }
  })
  arrayPercentage.sort((a, b) => b.attendance - a.attendance)
  //console.log(arrayPercentage)
  return arrayPercentage

}

function capacity(arrPast) {
  const arrayCapacity = arrPast.map(event => {
    return {
      capacity: event.capacity, //ver calculo.
      nameEvent: event.name
    }
  })
  arrayCapacity.sort((a, b) => b.capacity - a.capacity)
  //onsole.log(arrayCapacity)
  return arrayCapacity

}

function results(highestPercentage, lowestPercentage, largerCapacity) {
  let all = {
    highestPercentage: highestPercentage[0].nameEvent,
    lowestPercentage: lowestPercentage[0].nameEvent,
    largerCapacity: largerCapacity[0].nameEvent
  }
  return all
}

function printT(results, container) {
  const table = document.getElementById(container)
  table.innerHTML = `
  <tr>
      <td>${results.highestPercentage}</td>
      <td>${results.lowestPercentage}</td>
      <td>${results.largerCapacity}</td>
  </tr>
  `
}


function dataTable(arrTable){
   
    let categories = Array.from (new Set (arrTable.map(a => a.category)))
    let eventCategories = categories.map(cat => arrTable.filter(event => event.category == cat))
    let result = eventCategories.map(eventCat => {
        let calculate = eventCat.reduce((acc, event) =>{
            acc.category = event.category;
            acc.revenue += event.price * (event.assistance || event.estimate);
            acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
            return acc;
        }, {
            category: "",
            revenue: 0,
            attendance: 0
        } )
        calculate.attendance = calculate.attendance / eventCat.length
        return calculate;
    })
    return result;
}

function printTable(arrayDatosApi, tagHtml){
    const upcomingTable = document.getElementById(tagHtml)
    let html = arrayDatosApi.map(events => {
        return `
        <tr>
          <td>${events.category}</td>
          <td>${events.revenue}</td>
          <td>${events.attendance.toFixed(2)}%</td>
        </tr>

        `
    })
    upcomingTable.innerHTML = html.join("")
}

////// acc es acumulativo :)

/* 

function dataTable(arr) {
  let categories = Array.from(new Set(arr.map(a => a.category)));
  let eventCategories = categories.map(cat => arr.filter(event => event.category == cat))
  let result = eventCategories.map(eventCat => {
    let calculate = eventCat.reduce((acc, event) => {
      console.log(event)
      acc.category = event.category;
      acc.revenues += event.price * (event.assistance || event.estimate);
      acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
      return acc
    }, {
      category: "",
      revenues: 0,
      attendance: 0
    })
    calculate.attendance = calculate.attendance / eventCat.length
    return calculate
  })
  return result;
}
 */
/* function printTable(arr, idTag) {
  const upcomingTable = document.getElementById(idTag)
  let html = arr.map(events => {
    return `
      <tr>
              <td>${events.category}</td>
              <td>$${events.revenues}</td>
              <td>${events.attendance.toFixed(2)}%</td>
          </tr>
      `
  })
  upcomingTable.innerHTML = html.join("")
} */