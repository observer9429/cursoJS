
/**le pasamos el boton, el nombre que le ponemos a los atributos */
export default function darkTheme(btn,classDark){

    const d=document;

    const ls=localStorage;/**variable creada para guardar el tema oscuro escogido */

    const $themeBtn=d.querySelector(btn),
            $selectors=d.querySelectorAll("[data-dark]");/**ponemos entre comillas y corchetes
            porque es por tipo de atributo data-atributte, que es el data-dark 
            ,eso devuelve un node list, algo como arreglo*/

            console.log($selectors);/**esto imprime en consola los elemntos que contengan ese data-atributo */
        /**en las variables alamacenaremos las imagenes sol, luna, para despues agregarlas
         * al button dependiendo la accion
         */
            let moon="🙈",
            sun="🐇";

            const lightMode=()=>{ $selectors.forEach(elem=>elem.classList.remove(classDark))

                /**cambiamos el icono al presionar */
                $themeBtn.textContent=moon;

                /**definimos el localstorage el nombre a laLuz */
                ls.setItem("elTema","laLuz");
            };



            const darkMode=()=>{/**le agregamos la clase dark */
                /**usamos for each para modificar cada elemnto, automatico el primer parametro es
                 * el objeto uno, el segundo es el valor creo,
                 * pero en este caso solo se pasa un parametro
                 */
                $selectors.forEach(elem=>elem.classList.add(classDark))

                /**cambiamos el icono al presionar */
                $themeBtn.textContent=sun;

                /**definimos el localstorage el nombre a elOscuro */
                ls.setItem("elTema","elOscuro");
            };

            d.addEventListener("click",e=>{
                if(e.target.matches(btn)){

                    console.log($themeBtn.textContent);/**con esto vemos que es lo que contiene en su interior */
                    if($themeBtn.textContent===moon){
                        darkMode();
                    }else{
                        lightMode();
                        
                    }
                }
            })

            d.addEventListener("DOMContentLoaded",(e)=>{/**un DOMContentLoaded no puede contener 
                contener a otro DOMContentLoaded por eso sacamos el metodo 
                darkTheme(".dark-theme-btn","dark-mode") ; para que funcione */
                /**preguntamos si exite localstorage */

                console.log(ls.getItem("elTema")) ;

                if(ls.getItem("elTema")===null)ls.setItem("elTema","laLuz");

                if(ls.getItem("elTema")==="laLuz") lightMode();

                if(ls.getItem("elTema")==="elOscuro") darkMode();

            })

}