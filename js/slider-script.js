//Variável que armazena a classe dos projetos individuais.
var projetos = document.querySelectorAll('.projeto-individual');

//Variável que vai armazenar o valor 0 de início.
var itemAtual = 0

//Variável que armazena a classe das setas (Esquerda e Direta).
var setas = document.querySelectorAll('.setas')

//Função que irá separar as setas e vai identificar qual seta está sendo clicada.
setas.forEach(function (seta) {
    seta.addEventListener('click', function(elemento) {
        var setaClicada = elemento.currentTarget.dataset.seta
        
        //Condição que vai decrementar o item atual e irá verificar se ele é menor que 0, caso seja, ele vai voltar para 5.
        if (setaClicada == 'esquerda') {
            itemAtual--
    
             if (itemAtual < 0) {
                itemAtual = 5
            } 
        }

        //Condição que vai incrementar o item atual e irá verificar se ele é maior que 5, caso seja, ele vai voltar para 0.
        else {
            itemAtual++
    
            if (itemAtual > 5) {
                itemAtual = 0
            } 
        }
        
        //Função que vai verificar qual é o projeto atual mostrado na tela como base no valor do (itemAtual) e irá mostar ele no centro e vai dar o (efeito-focado) do CSS nele.
        projetos.forEach(function(item) {
            item.classList.remove('efeito-focado')
    
            item = projetos[itemAtual]
    
            item.scrollIntoView({
                inline: "center",
                block: "center",
                behavior: "smooth"
            })
    
            item.classList.add('efeito-focado')
        })
    })
})