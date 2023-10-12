class produto_upx extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        let imageLink = '/#';
        let productContent = 'Exemplo';

        const productWrapper = document.createElement('div');
        productWrapper.setAttribute('class','product-wrapper');

        const productTitleWrapper = document.createElement('div');
        productTitleWrapper.setAttribute('class','product-title-holder');

        const productTitle = document.createElement('span');
        productTitle.setAttribute('class','product-title');
        productTitle.textContent = productContent; 

        const productImage = document.createElement('img');
        productImage.setAttribute('class','product-image');
        productImage.setAttribute('alt','Imagem de produto');
        productImage.setAttribute('src',`${imageLink}`);

        const style = document.createElement('style');
        style.textContent = `
        .product-wrapper{
            height:150px;
            width:120px;
            background-color:green;
            border-radius:15px;
        }
        .product-title-holder{
            display:flex;
            justify-content:center;
            align-items:center;
        }`
        shadow.appendChild(productWrapper);
        shadow.appendChild(style);
        productWrapper.appendChild(productTitleWrapper);
        productWrapper.appendChild(productImage);
        productTitleWrapper.appendChild(productTitle);
    }
}customElements.define('produto-upx',produto_upx);