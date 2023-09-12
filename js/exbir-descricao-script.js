// Variável que armazena a descrição do projeto.
var descricao_projeto = document.getElementById('descricao-projeto')

//Variável que armazena todos os projeto da seção - Projetos.
var projetos = document.querySelectorAll('.projeto-individual')
var titulo_projeto

//Função que irá separar os projetos, e verificará qual o mouse está por cima, assim mostrando sua respectiva descrição no DOM.
projetos.forEach(function(projeto) {
    projeto.addEventListener('mouseover', function(e) {
        var id_projeto = e.target.id

        if (id_projeto == 'projeto-1' || titulo_projeto == 'projeto-1-titulo') {
            descricao_projeto.innerHTML = 'Esse site foi feito para o APP 360 Corp, foi utilizado HTML, CSS e JavaScript.'
        } else {
            descricao_projeto.innerHTML = 'Esse projeto estará disponivel em breve'
        }
    })

    // Função que vai resetar a descrição para original no DOM.
    projeto.addEventListener('mouseout', function() {
        titulo_projeto = null
        descricao_projeto.innerHTML = '--//--'
    })
})

// Variável que armazena todos os títulos dos projetos.
var titulos_projetos = document.querySelectorAll('.titulo-projeto')

//Função que irá separar os título, e verificará qual o mouse está por cima, assim mostrando sua respectiva descrição no DOM.
titulos_projetos.forEach(function(titulo) {
    titulo.addEventListener('mouseover', function(e) {
        titulo_projeto = e.target.id
    })
})