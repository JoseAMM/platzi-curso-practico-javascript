function calcularMediaAritmetica(lista){
    let suma = 0;
    let promedio = 0;
    for (const iterator of lista) {
        suma += iterator;
    }
    promedio = suma/lista.length;
    return promedio;
}