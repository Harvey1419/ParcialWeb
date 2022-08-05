$(document).ready(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    console.log(queryString);
    console.log(urlParams)

    let gustos = [];
    let porcentaje = [];
    for (let i = 0; i < 10; i++) {
        const gustosParam = urlParams.get(`gustos${i}`);
        const porcentajeParams = urlParams.get(`porcentaje${i}`)
        gustos.push(gustosParam)
        porcentaje.push(porcentajeParams)
    }

    var anuncioParam = urlParams.get('nombre');
    $('#h2ficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('email');
    $('#emailficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('telefono');
    $('#numeroficha').prepend(anuncioParam);
    anuncioParam = urlParams.get('gusto');
    $('#gustoficha').prepend(gustos);
    anuncioParam = urlParams.get('porcentaje');
    $('#porcentajeficha').prepend(porcentaje,'%');
    
});