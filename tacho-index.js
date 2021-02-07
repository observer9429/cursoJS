
import menuHamburguesa from "./tacho-hamburguesa.js";

import {digitalClock,alarm} from "./tacho-reloj.js";//cuando no es por defecto
import {shortcuts,moveBall} from "./tacho-teclado.js";//cuando no es por defecto

import countdown from "./tacho-cuentaRegresiva.js";

import scrollTopButton from "./tacho-botonScroll.js";
import darkTheme from "./tacho-temaOscuro.js";
import responsiveMedia from "./tacho-objetoResponsive.js";
import responsiveTester from "./tacho-responsiveTester.js";
import userDeviceInfo from "./tacho-deteccionDispositivos.js";
import networkStatus from "./tacho-deteccionRed.js";
import laGeolocalizacion from "./tacho-geolocalizacion.js";
import elFiltro from "./tacho-filtroBusqueda.js"; 
import sortear from "./tacho-sorteo.js";
import conSlider from "./tacho-elSlider.js";
import smartVideo from "./tacho-videoInteligente.js";


const d=document; 


/* le pasamos el nombre del boton hamburguesa , la pantalla aside escondida o a esconder y el menu 
movil para que cuando se seleccione devuelva un valor y se cirre el menumovil*/
d.addEventListener("DOMContentLoaded",(e)=>{
    menuHamburguesa(".panel-btn",".panel-movil",".menu-movil a");//ahi solo estyamos apsando nopmbre de selectores, ya
    //en el menu-hamburguesa.js hay que validarlo


    /*se le pasa el reloj(que es el div vacio con id reloj), boton inicio y boton que detiene */
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

/**le pasamos la musica, el boton activar alarma, desactivar alarma */
    alarm("./Blame.mp3","#activar-alarma","#desactivar-alarma"); 


    /**le pasamos el id del selector, la fecha limite y el mensaje  */
    countdown("countdown","Oct 29, 2020 03:50:55","Feliz dia wey");//como es id se pone asi sin el #


    scrollTopButton(".scroll-top-btn");


    /** el 2DO parametro vera si se cumple o no esas caracteristicas */
    /**le pasamos el nombre del id vacio, luego un media query que pasara 
         * de ese enlace al contenido ya embebiudo, despues el contenido html a nivel movil o alo asi;
         * y  el contenido que queremos que se cargue dinamicamente el¿n el desktop*/
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href='https://www.youtube.com/watch?v=vMtEole8Vzc&ab_channel=U2-SubtituladoESP' 
    target='_blank' rel='noopener'>Ver video  </a>`,

    `<iframe width="560" height="315" src="https://www.youtube.com/embed/J9gKyRmic20" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    /**ahora usamos la misma funcion pero para gmaps */ 
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href=https://goo.gl/maps/DjQHmF7a5TmmG4fW8 
    target='_blank' rel='noopener'>Ver mapa  </a>`,
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.166638792399!2d-76.98899638518685!3d-12.100742091431389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7bf511ba59d%3A0x58c4fae03566984f!2sCuartel%20Gral%20Del%20Ejercito%2C%20San%20Borja%2015037!5e0!3m2!1ses-419!2spe!4v1604949689159!5m2!1ses-419!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');

    /**le pasamos el nombre del id del formulario */
    responsiveTester("responsive-tester");
    /**da datos de la pc del ususairo o navegador */
    userDeviceInfo("user-device");

    laGeolocalizacion("laGeolocation");
/**le pasamos nombre del input */
    elFiltro(".card-filter",".card");

    sortear("#winner-btn",".player");

    conSlider();

    smartVideo();
});

/* import saludar,{PI,Saludar} from "./constantes.js";//la ruta cuando es la misma carpeta es ./
//saludar es la importacion por defecto, va afuera de las de mas importaciones*/  



//en este caso se le pasa el evento e xq tiene eventos de teclado como altkey etc

d.addEventListener("keydown",(e)=>{/** keydown es cuando se preiona la tecla, el kyup es cuando sueltas la tecla */
    shortcuts(e);
    //llamamos a la funcion move ball
    /**se le pasa el evento, el ballon y el area  */
    moveBall(e,".ball",".stage");
});


/**le pasamos nombre de selector del boton, despues el nombre de la clase que se creara y se agregara y 
 * quitará dinamicamente
 */
darkTheme(".dark-theme-btn","dark-mode") ;

/**metodo para ver el estado de conexion a internet */
networkStatus();