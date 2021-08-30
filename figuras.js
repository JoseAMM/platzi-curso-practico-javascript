console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado();
// console.log("El area del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

console.group("Triangulos");

// Codigo del triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function areaTriangulo(lado, base) {

    const altura = Math.sqrt(Math.pow(lado, 2) - (base / 2));
    area = (base * altura) / 2;
    return area;
}


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("Los lados del triangulo miden " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm" + " y su base mide " + baseTriangulo + " cm");


// console.log("La altura del triangulo es: " + alturaTriangulo + " cm");

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

// console.log("El area del triangulo es: " + areaTriangulo + " cm²");
console.groupEnd();

console.group("Circulos")
// Codigo del círculo

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI equivale a : " + PI + " cm");

// Circunferencia
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

// Area 
function areaCirculo(radio) {
    return PI * Math.pow(radio, 2);
}
// console.log("El area del circulo es: " + areaCirculo + " cm²");
console.groupEnd();

// Aqui interactuamos con el HTML


// Funciones Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Funciones Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const value = Number(input.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);

}
function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const value = Number(input.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    if(value == value2){
        const area = areaTriangulo(value, value3);
        alert(area);
    }else{
        alert("Los lados deben ser iguales")
    }

    
}

// Funciones Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = diametroCirculo(value) * Math.PI;
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert(area);
}