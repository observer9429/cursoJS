
const d=document,
    n=navigator;

export default function laGeolocalizacion(id){

    const $id=d.getElementById(id);

    const opciones={
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge: 0
    };

    const elExito =  (position)=>{

        let coords=position.coords;

        $id.innerHTML=`<p>Tu posición actual es</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy} metros</b></li>    

        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" 
        target="_blank" rel="noopener">Ver en Google Maps</a>
        `
        console.log(position);
    };

    const laCaida = (err)=>{

        $id.innerHTML=`<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);  
    };
    n.geolocation.getCurrentPosition(elExito,laCaida,opciones);/**se le pasa 3 parametros,1- cuando tiene exito,
    2- cuando no y 3- cson las opciones*/
}