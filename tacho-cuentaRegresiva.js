const d=document;


/**le pasamos el id del selector, la fecha limite y el mensaje  */
export default function countdown(id, limitDate, finalMessage){
    const $countdown=d.getElementById(id),/**es diferente al nombre de la funcion */
    countdownDate=new Date(limitDate).getTime();

    let countdownTempo=setInterval(() => {

        let now =new Date().getTime(),//el tiempo de ahora
        limitTime=countdownDate-now,
        days=Math.floor(limitTime/(1000*60*60*24)),
        hours= ("0"+Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))).slice(-2),
        //usamos el metodo slice para que corte el caracter qeu este antes de la posicion menos 2
        //claro que le sumamos un caracter 0 para que al haber un numero como 8
        //apareza falta 08 horas y no solo faltan 8 horas
        minutes=("0"+Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2),
        seconds=("0"+Math.floor((limitTime % (1000*60))/(1000))).slice(-2);

        $countdown.innerHTML=`<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`;
        //console.log(countdownDate,now, limitTime);

        if(limitTime<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML=`<h3>${finalMessage} </h3>`;
            
        }
    }, 1000);
}