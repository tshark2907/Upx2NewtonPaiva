class rodape_upx extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        let disclaimer = 'O Projeto Eco Troca foi criado para a Usina de Projetos Experimentais da faculdade Newton Paiva. Futuramente poderá ser implementado e se tornar um mercado real.'

        const rodapeWrapper = document.createElement('div');
        rodapeWrapper.classList.add('rodape-wrapper');

        const rodapeDisclaimer = document.createElement('span')
        rodapeDisclaimer.classList.add('rodape-disclaimer');
        rodapeDisclaimer.textContent = disclaimer;

        const style = document.createElement('style');
        style.textContent = `
        .rodape-wrapper{
            width:100%;
            padding:20px;
            background-color:cyan;
            position:absolute;
            bottom:0;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .rodape-disclaimer{
            width:80%;
        }
        `
        shadow.appendChild(style);
        shadow.appendChild(rodapeWrapper);
        rodapeWrapper.appendChild(rodapeDisclaimer);
    }
}customElements.define('rodape-upx', rodape_upx);