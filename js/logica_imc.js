const calcularValorIMC = (peso, altura) => {
    altura = altura / 100
    return peso / (altura * altura)
}

const calcularStatusIMC = (valorIMC) => {
    let statusIMC = ""
    switch (true) {
        case (valorIMC < 16):
            statusIMC = "Magreza grave"
            break;
        case (valorIMC >= 16 && valorIMC < 17):
            statusIMC = "Magreza moderada"
            break;
        case (valorIMC >= 17 && valorIMC < 18.6):
            statusIMC = "Magreza leve"
            break;
        case (valorIMC >= 18.6 && valorIMC < 25):
            statusIMC = "Peso ideal"
            break;
        case (valorIMC >= 25 && valorIMC < 30):
            statusIMC = "Sobrepeso"
            break;
        case (valorIMC >= 30 && valorIMC < 35):
            statusIMC = "Obesidade grau I"
            break;
        case (valorIMC >= 35 && valorIMC < 40):
            statusIMC = "Obesidade grau II ou severa"
            break;
        default:
            statusIMC = "Obesidade grau III ou mórbida"
            break;
    }
    return statusIMC
}

const calcularBtn = document.querySelector('#calcular')

calcularBtn.addEventListener('click', () => {
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let valorPeso = parseInt(peso.value)
    let valorAltura = parseInt(altura.value)

    let valorIMC = calcularValorIMC(valorPeso, valorAltura)
    let statusIMC = calcularStatusIMC(valorIMC)

    let valorIMCtxt = document.querySelector('#valorIMCtxt')
    let statusIMCtxt = document.querySelector('#statusIMCtxt')
    valorIMCtxt.textContent = `Valor do IMC: ${valorIMC.toFixed(1)}`
    statusIMCtxt.textContent = `Status do IMC: ${statusIMC}`
})
