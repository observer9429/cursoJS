const d=document,
w=window;


/**le pasamos el boton */
export default function scrollTopButton(btn){
    const $scrollBtn=d.querySelector(btn);

    

    w.addEventListener("scroll",e=>{

        /**nos da la distancia que esta el scroll desde el inicio
         * /** ponemos las dos opciones porque algunos navegadores no soportan algunos metodos */
         
        let scrollTop=w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop >600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        } 

        console.log(w.pageYOffset, d.documentElement.scrollTop);
    });


    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){

            /**metodo para poner el scroll en una posicion determinada
             * ,le damos efecto smooth para que la transciion sea lenta o suave
             */
            w.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    });
}