const d=document;


/*variables que ayudaran a mover en el sentido de X o Y |*/
let x=0,
y=0;


/**se le pasa el evento, el ballon y el area  */
export function moveBall(e,ball,stage){

    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    $limitsBall=$ball.getBoundingClientRect(),/**devuelve la posicion o limites creo */
    $limitsStage=$stage.getBoundingClientRect();

    console.log(e.keyCode);
    console.log(e.key);

    console.log($limitsBall,$limitsStage);


    
    switch (e.keyCode) {
        //iquierda 
        case 37:
                 
           if($limitsBall.left > $limitsStage.left){/**compara el valor de x */
            e.preventDefault();/**esta linea es apra que no se mueva el scroll de la pagina 
            y lo ponemos adentro de la validacion y no afuera asi el scroll lateral si funcionara al salir del cuadro
            del balon*/
           x--;
            }
        break;

        case 38://arriba     

            if($limitsBall.top > $limitsStage.top){
                e.preventDefault();
                y--;
            }            
        break;

        case 39://izquierda
        
            if($limitsBall.right < $limitsStage.right){
                e.preventDefault();
                x++;
            }
        break;

        case 40://abajo
        
            if($limitsBall.bottom < $limitsStage.bottom){
                e.preventDefault();
                y++;
            }
            
        break;
    
        default:
            break;
    }
    $ball.style.transform=`translate(${x*10}px, ${y*10}px)`;/**con esto movemos la pelota */
}

export function shortcuts(e){
    /*
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e);
    console.log(e.type);
    //para ver si se preiono una tecla especial como control
    console.log(e.shiftKey)
    console.log(e.ctrlKey);*/

    if(e.key==="a" &&  e.altKey ){//si se oresiona a mas la tecla alt
        alert("Se lanza la alerta");
    }

    if(e.key==="c" &&  e.altKey ){//si se oresiona a mas la tecla alt
        confirm("una confirm");
    }

    if(e.key==="p" &&  e.altKey ){//si se oresiona a mas la tecla alt
        prompt("el prompt");
    }

}

 