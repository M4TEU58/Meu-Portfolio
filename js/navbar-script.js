//Essa variável armazena o container da Navbar.
var container_navbar = document.getElementById('container-navbar')

//Variável que armazena o botão tipo humburger para mostrar a navbar.
var btn_navbar = document.getElementById('navbar-botao')

//Função que adiciona e remove a classe responsável por mostrar ou esconder a Navbar.
btn_navbar.addEventListener('click', mostrarNavbar)
function mostrarNavbar() {
    container_navbar.classList.toggle('mostrar-navbar')
}

//Variável que armazena o botão X, para fechar a NavBar.
var btn_navbar_fechar = document.getElementById('navbar-botao-fechar')

//Função que vai remover a classe que mostra a Navbar.
btn_navbar_fechar.addEventListener('click', fecharNavbar)
function fecharNavbar() {
    container_navbar.classList.remove('mostrar-navbar')
}