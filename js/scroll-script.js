//Variável que armazena a classe dos itens (links) da Navbar.
var navbar_links = document.querySelectorAll('.navbar-item-link');

//Função que vai separar cada link da classe navbar_links e dar a função que vai levar o usuário para uma respectiva seção do site, utilizando o atributo "href" como referençia.
navbar_links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        var id = e.currentTarget.getAttribute('href')
        var area = document.querySelector(id)
        var posicao_atual = area.offsetTop;

        window.scroll({
            top: posicao_atual,
            behavior: 'smooth'
        })

        var container_navbar = document.getElementById('container-navbar')
        container_navbar.classList.remove('mostrar-navbar')
    })
})

//Função vai excutar a função irTop ao carregar a página.
window.addEventListener('DOMContentLoaded', irTop)

//Função que vai dar um scroll até o topo da página.
function irTop() {
    window.scroll( {
        top: 0,
        behavior: 'smooth'
    } )
}