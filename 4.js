function processarTexto(texto, callbackModificadora){
    return callbackModificadora(texto)
}

processarTexto ("senai valinhos", (t) => console.log(t.toUpperCase()))