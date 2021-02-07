

/* 
panelBtn== el boton hamburguesa
panel=el panel que aparecera
menuLink==es el link presionado de secciones


 

en el marches
panelBtn*== es para los elementos que contenga este bootn como las rayas interiores
*/

export default function menuHamburguesa(panelBtn,panel, menuLink){
    const d =document;
    d.addEventListener("click",(e)=>{

//matches recibe selector valiudo de css
//en el segundo e target ponemos que tambien funcione en todo el buton y
//no solo en los bordes
//todo lo que herede del boton, o lo que este contenido en el boton
 
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){//verifica el nombre de la clase
            //el target es para identificar el elemento que dispara el evento
            //el matches retorna tru si el elemento indicado existe , en caso contrario retorna false
            //y el toogle agrega una clase si no la tiene
            //y la quita en caso la tenga
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");//para darle efecto al boton,quitandole
            //esa clase o poniendola
            

            console.log(d.querySelector(panel).classList);
        }

        //para que se cierre las segunda cara al escoger una opcion del menu
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");//eliminamos
             //la que creo que es clase is-active para que se cirre la segunda cara
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}