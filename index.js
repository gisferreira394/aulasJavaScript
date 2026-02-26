console.log('Javascrip funcionando');

let primeironame = 'André';

console.log(primeironame);

// let é usado para determinar uma variavel
let numero = 30;

console.log(numero);

//se quiser que a variavel fique constante para sempre sem conseguir alterar use "const"
const numero2 = 2

console.log(numero2)

// =================================================================================

//grupo

let item = {
    itemName: 'Caneta',
    itemPreco: 5,
    itemCor: 'Azul',
    itemvalidacao: true
}

console.log(item)

//se quiser mudar algum item

item.itemCor = 'rosa'

// se quiser só mostrar um item

console.log(item.itemName)

//=====================================================================================

//lista

let amigos = ['Geovana', 'Ana Paula', 'Rafaela', 'Nicolas']
//chama um item em específico coloca o []
console.log(amigos[1])

//substituir item

amigos[2] = 'rafa'

console.log(amigos)

//=======================================================================================
 // funções
function sobre(status, valor){

console.log('A transição foi:' + status + '! O valor é: R$ ' + valor)
}

sobre ('Aprovado', 10)

//==========================================================================================

function desconto (preco){
return preco - (preco * 10/100)
}

console.log (desconto(20))
