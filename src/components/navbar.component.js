class navbar_upx extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});

        const links = [
            icon_1Link,
            icon_2Link,
            icon_3Link,
            icon_4Link,
            icon_5Link,
            icon_6Link
        ];

        const navbarWrapper = document.createElement('nav');
        navbarWrapper.classList.add('navbar-wrapper');

        const linksList = document.createElement('ul');
        linksList.classList.add('links-list');

        const element_1 = document.createElement('li');
        element_1.classList.add('element-1');

        const icon_1 = document.createElement('img');
        icon_1.setAttribute('class', 'trocar')
        icon_1.setAttribute('src', `${icon_1Link}`);
        icon_1.setAttribute('alt','Trocar');

        const link_1 = document.createElement('a');
        link_1.classList.add('link-1');

        const element_2 = document.createElement('li');
        element_2.classList.add('element-2');

        const icon_2 = document.createElement('img');
        icon_2.setAttribute('class', 'trocar');
        icon_2.setAttribute('src', `${icon_2Link}`);
        icon_2.setAttribute('alt','Trocar');

        const link_2 = document.createElement('a');
        link_2.classList.add('link-2');

        const element_3 = document.createElement('li');
        element_3.classList.add('element-3');

        const icon_3 = document.createElement('img');
        icon_3.setAttribute('class', 'trocar');
        icon_3.setAttribute('src', `${icon_3Link}`);
        icon_3.setAttribute('alt','Trocar');

        const link_3 = document.createElement('a');
        link_3.classList.add('link-3');

        const element_4 = document.createElement('li');
        element_4.classList.add('element-4');

        const icon_4 = document.createElement('img');
        icon_4.setAttribute('class', 'trocar');
        icon_4.setAttribute('src', `${icon_4Link}`);
        icon_4.setAttribute('alt','Trocar');

        const link_4 = document.createElement('a')
        link_4.classList.add('link-4');

        const element_5 = document.createElement('li');
        element_5.classList.add('element-5');

        const icon_5 = document.createElement('img');
        icon_5.setAttribute('class', 'trocar');
        icon_5.setAttribute('src', `${icon_5Link}`);
        icon_5.setAttribute('alt','Trocar');

        const link_5 = document.createElement('a')
        link_5.classList.add('link-5');

        const element_6 = document.createElement('li');
        element_6.classList.add('element-6');

        const icon_6 = document.createElement('img');
        icon_6.setAttribute('class', 'trocar');
        icon_6.setAttribute('src', `${icon_6Link}`);
        icon_6.setAttribute('alt','Trocar');

        const link_6 = document.createElement('a');
        link_6.classList.add('link-6');

        for(let i = 1; i < 7; i++){
            element_`${i}`.appendChild(icon_`${i}`);
            element_`${i}`.appendChild(link_`${i}`);
            linksList.appendChild(element_`${i}`);
        }
        navbarWrapper.appendChild(linksList);

        const style = document.createElement('style');
        style.textContent = `
        .links-list{
            display:flex;
            justify-content:space-evenly;
            align-items:center;
            margin:0 auto;
        }
        .links-list li{
            padding:10px;
        }
        navbar-wrapper{
            width:100%;
            height:120px;
            background-color:lightpink;
        }
        `;
        shadow.appendChild(navbarWrapper);
        shadow.appendChild(style);
}}
customElements.define('navbar-upx',navbar_upx);