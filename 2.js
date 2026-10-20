function  calcularDobro(numero) {
    return numero*2
}

function imprimirFormatado(valor, callbackResultado){
    callbackResultado
    return console.log("[RESULTADO]: O valor calculado é " + valor)
}

imprimirFormatado(calcularDobro(25))