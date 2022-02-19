const valores = " 0 10 20 20 8 25 3 0 30 1"

let arrayValores = null
const arrayValoresNumericos = []
const resultado = []

function jogo (valores) {
    arrayValores = valores.split(" ")
    
    for(i = 0; i < arrayValores.length; i++) {
        arrayValoresNumericos.push(Number(arrayValores[i]))
    }
    
    let vezesBateuRcorde = 0
    let posicaoMenorPonto = arrayValoresNumericos[0]
    
    for(i = 1; i < arrayValoresNumericos.length; i++) {
        if(arrayValoresNumericos[i] > arrayValoresNumericos[i - 1]) {
            vezesBateuRcorde = vezesBateuRcorde + 1
        }
    
        if(arrayValoresNumericos[i] < posicaoMenorPonto) {
            posicaoMenorPonto = arrayValoresNumericos[i]
        }
    
        
    }

    posicaoMenorPonto = arrayValoresNumericos.indexOf(posicaoMenorPonto)
    resultado.push(vezesBateuRcorde)
    resultado.push(posicaoMenorPonto + 1)
    return console.log(resultado)
}

jogo(valores)








