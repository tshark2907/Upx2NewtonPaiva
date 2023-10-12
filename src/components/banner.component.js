class banner_upx extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const banner_wrapper = document.createElement('div');
        banner_wrapper.setAttribute('class', 'Banner_wrapper_upx');

        const dots_holder = document.createElement('div');
        dots_holder.setAttribute('class', 'Dots_holder_upx');

        const dots = [];

        let dotIndex = 0;

        for (let i = 0; i < 5; i++) {
            const dot = document.createElement('div');
            dots.push(dot);
            dot.setAttribute('class', `Dot ${dotIndex}`);
            dot.addEventListener('click', () => {
                handleClick(dot)
            });
            dotIndex++;
        }

        dots.forEach(element => {
            dots_holder.appendChild(element);
        })

        function handleClick(clickedDot){
            console.log(clickedDot.classList)
        }

        const banner = document.createElement('div');
        banner.setAttribute('class', 'Banner_upx');

        const banner_expositor = document.createElement('div');
        banner_expositor.setAttribute('class', 'Banner_expositor_upx');

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

        for (let img of banner_images) {
            img.setAttribute('class', `Banner_image ${counter}`);
            img.setAttribute('alt', `Image #${counter}`);
            counter++;
        }

        const banner_title = document.createElement('span');
        banner_title.setAttribute('class', 'Banner_title_upx');
        banner_title.textContent = 'Produtos destaque da semana';

        let banner_controler = 0;

        const style = document.createElement('style');
        style.textContent =
            `.Banner_upx{
                padding:15px;
                width:80%;
                height:200px;
                margin:30px auto;
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
                height:10px;
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
                margin-top:35px;
                width:200%;
                height:160px;
                background-color:green;
                transform:translateX(${banner_controler}%);
            }
            .Images_holder_upx{
                width:${100 * banner_images.length}%;
                height:100%;
                display:flex;
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:2;
                gap:1px;
            }
            .Banner_expositor_upx{
                width:100%;
                height:100%;
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                overflow:hidden;
            }
            .Highlighted_dot{
                transform:scale(1.2);
            }
        `;

        function highlightDot() {
            let dots_reference = [
                [-200, dots[0]],
                [-100, dots[1]],
                [0, dots[2]],
                [100, dots[3]],
                [200, dots[4]]
            ];
            for (let element of dots_reference) {
                if (element[0] == banner_controler) {
                    element[1].classList.toggle('Highlighted_dot');
                }
            }
        }

        banner_wrapper.appendChild(banner);
        banner.appendChild(banner_title);
        banner.appendChild(dots_holder);
        banner.appendChild(banner_expositor);
        banner_expositor.appendChild(banner_images_holder);

        banner_images.forEach(element => {
            banner_images_holder.appendChild(element);
        });

        shadow.appendChild(banner_wrapper);
        shadow.appendChild(style);
    }
}

customElements.define('banner-upx', banner_upx);
