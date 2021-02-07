const d=document;

/*se le pasa el reloj(que es el div vacio con id reloj), boton inicio y boton que detiene */
export function digitalClock(clock,btnPlay,btnStop){//se le pasan los nombres de los id asignados al div , 
    //y a los dos buttons
    let clockTempo;/** esta variable guardara el setInterval */

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            clockTempo= setInterval(() => {
                let clockHour=new Date().toLocaleTimeString();/*guardamos la hora en una variable*/

                /* mostramos la hora guardada en la variable en el div vacio con id reloj */
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`;
            }, 100);

            /* desabilitamos el boton que desencadeno el evento */
            e.target.disabled=true;
        }

        if(e.target.matches(btnStop)){ 


            clearInterval(clockTempo);/**eliminamos el set interval ya que esta guardado en una variable */

            d.querySelector(clock).innerHTML=null;
            //ahora hacemos que el boton iniciar reloj se active, por que ha estado deshabilitado
            d.querySelector(btnPlay).disabled=false;
        }

    });

}
/**se le pasa la musica, el boton iniciar alamara, y detener alarma */
export function alarm(sound,btnPlay,btnStop){
    
    let alarmaTempo;

    const $alarma=d.createElement("audio");/**guardamos la musica */
    $alarma.src=sound;
/**le agregamos el evento click */
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){ 
            alarmaTempo=setTimeout(() => {
                $alarma.play();
            }, 2000); 
            e.target.disabled=true;
        }

        if(e.target.matches(btnStop)){
          clearTimeout(alarmaTempo);
          $alarma.pause();//esto solo pausa el sonido
          $alarma.currentTime=0;//con esto le indicamos el momento al que queremos que regrese
          //hacemos que regrese al inicio para que el boton detener sea logico

          d.querySelector(btnPlay).disabled=false;
        }

    });
    
}