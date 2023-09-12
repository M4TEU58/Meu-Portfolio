//Variável que armazena o texto do título principal.
var titulo = document.getElementById('secao-principal-titulo')
maquinaDeEscrever(titulo)

//Função que limpar o texto do título principal e irá adicionar cada letrar em uma espaço de tempo.
function maquinaDeEscrever(elemento) {
    var textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach(function(letra, indice) {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 70 * indice)
    })
}