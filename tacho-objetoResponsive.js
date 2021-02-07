const d=document,
        w=window;

        /**le pasamos el nombre del id vacio, luego un media query que pasara 
         * de ese enlace al contenido ya embebiudo, despues el contenido html a nivel movil o alo asi;
         * y  el contenido que queremos que se cargue dinamicamente el¿n el desktop*/
        export default function responsiveMedia(id,mq,mobileContent,desktopContent){

            let breakpoint=w.matchMedia(mq);/**guardamos la mediaquery */

            const responsive =(e)=>{/**esto devolvera true,si el mq que es la dimension de la pagina esta a 
                mas de 1024, asi mostrara la foto del video */
                if(e.matches){
                    d.getElementById(id).innerHTML=desktopContent;
                }else{
                    d.getElementById(id).innerHTML=mobileContent;
                }

                console.log("MQ",breakpoint, e.matches);
            }

            breakpoint.addEventListener("change",responsive)
            responsive(breakpoint);/**hacemos que se ejecute desde el mdload, le pasamos la variable
             que tiene toda la inf del mediaquery */
        }