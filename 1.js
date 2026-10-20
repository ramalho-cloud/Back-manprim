function saudacao () {
    return console.log("Olá! Bem-vindo ao Back-End com Node.js!")
}

function executar(callback){
    return console.log("Iniciando processo...")
    callback()
}


executar(saudacao)