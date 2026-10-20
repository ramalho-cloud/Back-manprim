function dividir(y,a) {
    return y/(2*a)
};

function bhaskara (a,b,c,callbeckdividir, callbeckdividir2) {  
    const x= b *(-1) + Math.sqrt(b **2 -4*a*c)
    const x2= b *(-1) - Math.sqrt(b **2 -4*a*c)
    console.log(callbeckdividir2(x2,2))
    return callbeckdividir(x,2)
}


console.log(bhaskara (1,-6,8, dividir, dividir));