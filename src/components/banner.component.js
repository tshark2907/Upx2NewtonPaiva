class banner_upx extends HTMLElement{
    constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});

    const banner_wrapper = document.createElement('div');
    banner_wrapper.setAttribute('class','Banner_wrapper_upx2');

    const dots_holder = document.createElement('div');
    dots_holder.setAttribute('class', 'Dots_holder_upx');

    const dots = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    for(let dot of dots){
        dot.setAttribute('class', 'Dot')
    };

    const banner = document.createElement('div');
    banner.setAttribute('class','Banner_upx');

    const banner_images_holder = document.createElement('div');
    banner_images_holder.setAttribute('class', 'Images_holder_upx');

    const banner_images = [
        document.createElement('img'),
        document.createElement('img'),
        document.createElement('img'),
        document.createElement('img'),
        document.createElement('img')
    ];
    let counter = 1;

    for(let img of banner_images){
        img.setAttribute('class',`Banner_image ${counter}`);
        img.setAttribute('alt',`Image #${counter}`);
        counter++;
    }

    const banner_title = document.createElement('span');
    banner_title.setAttribute('class','Banner_title_upx');
    banner_title.textContent ='Produtos destaque da semana';


    const style = document.createElement('style');
    style.textContent = 
    `.Banner_upx{
        padding:15px;
        width:80%;
        height:200px;
        margin:50px auto;
        background-color:#1FF0C4;
        position:relative;
    }
     .Banner_title_upx{
        width:80%;
        font-size:1.6rem;
        font-family:'System-ui',sans-serif;
        position:absolute;
        justify-content:center;
        top:30px;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:3;
     }
     .Dots_holder_upx{
        width:120px;
        heigth:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        position:absolute;
        bottom:10px;
        left:50%;
        transform:translate(-50%,-50%);
     }
    .Dot{
        width:10px;
        height:10px;
        border-radius:50%;
        border:1px solid black;
        background-color:white;
        cursor:pointer;
    }
    .Banner_image{
        width:200%;
        height:180px;
        background-color:green;
    }
    .Images_holder_upx{
        width:100%;
        heigth:100%;
        display:flex;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:2;
        gap:1px;
    }
    `
    banner_wrapper.appendChild(banner);
    banner.appendChild(banner_title);
    banner.appendChild(dots_holder);
    banner.appendChild(banner_images_holder);
    dots.forEach(element => {
        dots_holder.appendChild(element);
    });
    banner_images.forEach(element => {
        banner_images_holder.appendChild(element)
    })
    shadow.appendChild(banner_wrapper);
    shadow.appendChild(style);}
    
}customElements.define('banner-upx', banner_upx);