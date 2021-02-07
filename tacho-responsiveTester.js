
const d=document;

/**le pasariamos el nombre del id del formulario */
export default function responsiveTester(form){

    const $form=d.getElementById(form);

    /**creamos una variable vacia para guardar la nueva pagina que se abrira */
    let elTester;

    d.addEventListener("submit",(e)=>{
        if(e.target===$form){
            /**cancelamos la accion por defecto de los submit, que es el recargar la pagina,
             * ya que manejaremos las acciones con el addeventlistener de este metodo
             */
            e.preventDefault();
            

            /**guardamos la direccion a la que queremos ir */
            elTester=
            window.open($form.direccion.value,"elTester",
            `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value} `);
            /**asi accedemos al valordel input con el valor del name, el segundo aprametro va obligado, 
             * tercer parametro van las medidas de la nueva ventana
            */
        }
    })

    /**ahora añadiendo evento al boton cerrar */
    d.addEventListener("click",(e)=>{
        if(e.target===$form.cerrar) elTester.close();
    })
}