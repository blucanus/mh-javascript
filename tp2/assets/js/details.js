let params = new URLSearchParams(document.location.search);
let id_event = parseInt(params.get("id"), 10);
console.log(id_event);