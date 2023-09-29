class header_upx extends HTMLElement{
    constructor()/*Precisa ser chamado pra construir essa classe*/{
        super()/*Precisa ser chamado para extender corretamente ela pra outros arquivos*/;
        const shadow = this.attachShadow({mode:"open"});/*Essa variavel permite amarrar uma sombra ao elemento, 
        possibilitando o uso do shadow dom, o mode open permite que esse elemento seja referenciado
        e utilizado por javascript externo*/
        /*Abaixo, vou comecar a criar a estrutura do elemento e estilizar*/
        const wrapper = document.createElement('header');
        wrapper.setAttribute('class', 'Header_upx');

        const logo = document.createElement('img');
        logo.setAttribute('class', 'Logo_header_upx');
        logo.setAttribute('alt','Logo')

        const sandwich = document.createElement('span');
        sandwich.setAttribute('class','Sandwich_header_upx2','material-symbols-outlined');
        sandwich.textContent = 'menu';
        /*Este elemento é do google icons, vou importar no index.html e utilizar 
        a segunda classe e o conteudo de texto pra atribuir o icone correto*/

        const searchbar = document.createElement('div');
        searchbar.setAttribute('class','SearchBar_header_upx');

        const searchIcon = document.createElement('span');
        searchIcon.setAttribute('class', 'SearchIcon_header_upx', 'material-symbols-outlined');
        searchIcon.textContent = 'search';

        const searchField = document.createElement('textarea');
        searchField.setAttribute('class','searchField');
        searchField.setAttribute("id","SearchField_header_upx");
        searchField.setAttribute('name','searchText');

        const searchLabel = document.createElement('label');
        searchLabel.setAttribute('for', 'searchField');
        searchField.textContent = 'Pesquise por algum item';


        /*Depois de criados os elementos, é necessário colocá-los um dentro do outro*/

        wrapper.appendChild(logo,searchbar,sandwich);/*Dessa forma, os elementos logo, sandwich e searchbar
        são atribuidos a elementos filhos do elemento wrapper*/;
        searchbar.appendChild(searchIcon, searchField);
        searchField.appendChild(searchLabel);

        let style = document.createElement('style');
        style.textContent = `

        .Header_upx {
            margin: 0 auto; 
            width: 80%;
            height: 80px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background-color:#1FF0C4;
        }
        .Logo_header_upx{
            width:60px;
            height:60px;
            background-color:#ffffff;
            background-image: url("/assets");
        }
        .SearchBar_header_upx{
            width: 200px;
            height:50px;
            background-color:#ffffff;
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .SearchIcon_header_upx{
            width:45px;
            height:45px;
            color:grey;
        }
        .SearchField_header_upx{
            font-family:'System-ui',sans-serif;
            font-size:1.2rem;
            background-color: #97C0FC;
        }
        .Sandwich_header_upx{
            width:50px;
            height:50px;
            background-color:red;
        }
        `
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        }
}customElements.define('header-upx',header_upx);
