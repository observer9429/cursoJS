
const d=document;

/**le pasamos nombre del selector del nput y el selector */
export default function elFiltro(input, selector){

    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            console.log(e.target.value);

            /**una pequeña validacion si presiona escape */
            if(e.key==="Escape") e.target.value="";

            /**si devuelve true,es que si coincide laletra*/
            d.querySelectorAll(selector).forEach((el)=> el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("filter")/**si cumple lo muestra */
            :el.classList.add("filter")/**si no cumple le aplica la clase que tiene como display none */
            )
        }
    })
} 