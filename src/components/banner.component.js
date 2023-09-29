class banner_upx extends HTMLElement{
    constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});

    const banner_wrapper = document.createElement('div');
    banner_wrapper.setAttribute('class','Banner_wrapper_upx2');

    const banner = document.createElement('div');
    banner.setAttribute('class','Banner_upx');

    const banner_title = document.createElement('span');
    banner_title.setAttribute('class','Banner_title_upx');
    banner_title.textContent ='Produtos destaque da semana';


    const style = document.createElement('style');
    style.textContent = 
    `.Banner_upx{
        width:80%;
        height:200px;
        margin:50px auto;
        background-color:#1FF0C4;
        position:relative;
    }
     .Banner_title_upx{
        font-size:1.8rem;
        font-family:'System-ui',sans-serif;
        position:absolute;
        top:25%;
        left:50%;
        transform:translate(-50%,-50%);
     }
    }
    `
    banner_wrapper.appendChild(banner);
    banner.appendChild(banner_title)
    shadow.appendChild(banner_wrapper);
    shadow.appendChild(style);}
    
}customElements.define('banner-upx', banner_upx);