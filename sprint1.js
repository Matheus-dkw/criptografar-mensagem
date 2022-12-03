var entradaDeTexto = document.getElementById("textoentrada")
var txtvalue = entradaDeTexto.value
var msg = document.getElementById("mensagem")

var array = txtvalue.split('')
var copiartexto = (array.join("")).value

var boxImg = document.getElementById('posicaoImagem')
var caixamsg = document.getElementById('saidaTextobox')

var botaoCopiar = document.getElementById('b3')

botaoCopiar.style.display = 'none'


function criptografar() {

    boxImg.style.display = 'none'

    botaoCopiar.style.display = 'inline-block'


    var entradaDeTexto = document.getElementById("textoentrada")
    var txtvalue = entradaDeTexto.value
    var msg = document.getElementById("mensagem")

    var array = txtvalue.split('')



    /*--------------loop---------------------------------------------*/

    for (pos = 0; pos <= array.length; pos++) {

        if ('e' == array[pos]) {
            array[pos] = 'enter'
        }
        if ('i' == array[pos]) {
            array[pos] = 'imes'
        }
        if ('a' == array[pos]) {
            array[pos] = 'ai'
        }
        if ('o' == array[pos]) {
            array[pos] = 'ober'
        }
        if ('u' == array[pos]) {
            array[pos] = 'ufat'
        }
    }

    msg.innerHTML = array.join("")

}

function descriptografar() {

    var entradaDeTexto = document.getElementById("textoentrada")
    var txtvalue = entradaDeTexto.value
    var msg = document.getElementById("mensagem")
    var boxImg = document.getElementById('posicaoImagem')
    var array = txtvalue.split('')
    var textoSaida = ''

    for (pos = 0; pos < array.length; pos++) {

        // g a i t o b e r    - array.length == 8

        if (array[pos] == 'a') {
            textoSaida = textoSaida + 'a'
            pos = pos + 1
        }
        else if (array[pos] == 'e') {
            textoSaida = textoSaida + 'e'
            pos = pos + 4
        }
        else if (array[pos] == 'i') {
            textoSaida = textoSaida + 'i'
            pos = pos + 3
        }
        else if (array[pos] == 'o') {
            textoSaida = textoSaida + 'o'
            pos = pos + 3
        }
        else if (array[pos] == 'u') {
            textoSaida = textoSaida + 'u'
            pos = pos + 3
        }
        else {
            textoSaida = textoSaida + array[pos]
        }
    }

    msg.innerHTML = textoSaida



}



function copiar() {
    var copiartexto = document.querySelector("mensagem") // errado
    conteudoCriptografado.select()
    document.execCommand("cut")
    alert("mensagem copiada!")

}

