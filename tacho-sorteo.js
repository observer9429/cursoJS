
const d=document;

/**le pasamos el boton que activa, y el nombre del selector que se va a elegir */
export default function sortear(btn, selector){

    const getWinner=(selector)=>{

        const $players=d.querySelectorAll(selector),
        random=Math.floor(Math.random()*$players.length),/**creamos un numero al acar entre el numero de particip */
        winner=$players[random];

        console.log( $players,random,winner);
        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){

            let resultado=getWinner(selector);
            alert(resultado);
            console.log(resultado);

        }
    })

}