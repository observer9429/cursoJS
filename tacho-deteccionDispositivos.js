
const d=document,
    elNav=navigator,
    elUserAgent=elNav.userAgent;

/**recide el id donde se va guardar la informacion guardada de user agent */
export default function userDeviceInfo(id){
    
    const $id=d.getElementById(id),
        isMobile={
            android: ()=> elUserAgent.match(/android/i),
            ios: () => elUserAgent.match(/iphone|ipad|ipod/i),
            windows: ()=> elUserAgent.match(/windows phone/i),
            any: function (){
                return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop={
            linux: ()=> elUserAgent.match(/linux/i),
            mac: () => elUserAgent.match(/mac os|/i),
            windows: ()=> elUserAgent.match(/windows nt/i),
            any: function (){
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser={
            chrome: ()=> elUserAgent.match(/chrome/i),
            safari: ()=>elUserAgent.match(/safari/i),
            firefox: ()=>elUserAgent.match(/firefox/i),
            opera: ()=>elUserAgent.match(/opera|opera mini/i),
            ie: ()=>elUserAgent.match(/msie|iemobile/i),
            edge: ()=>elUserAgent.match(/edge/i),
            any: function () {
                return (
                    this.ie() ||
                    this.edge() ||
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() 
                )
            }
        };

        $id.innerHTML=`
        <ul>
            <li>User Agent <b>${elUserAgent}</b></li>
            <li>Plataforma: <b>
                ${isMobile.any()? isMobile.any():isDesktop.any()}
            </b>          
            </li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
        `;

        if(isBrowser.chrome()){
            $id.innerHTML +=`<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
        }

        if(isMobile.android()){
            window.location.href="https://www.cuevana3.co/";
        }
    
    console.log(elUserAgent);

}