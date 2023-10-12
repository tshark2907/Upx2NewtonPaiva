class displayDeProdutosUpx extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});

        const displayWrapper = document.createElement('section');
        displayWrapper.setAttribute('class','display-wrapper');

        const style = document.createElement('style');
        style.textContent = `
            .display-wrapper{
                width:80%;
                height:fit-content;
                background-color:orange;
                margin:0 auto;
                padding:15px;
                gap:10px;
                display:flex;
                flex-direction:row;
                overflow:hidden;
            }`
        shadow.appendChild(displayWrapper);
        shadow.appendChild(style);

    }
}customElements.define('display-de-produtos',displayDeProdutosUpx);