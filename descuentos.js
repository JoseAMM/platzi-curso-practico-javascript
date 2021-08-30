function calcularPrecioConDescuento(precio, descuento){
    const precioConDescuento = precio - (precio * (descuento/100));
    return precioConDescuento;
}

function priceWithDiscount(price, discount){
    const input = document.getElementById("InputPrice");
    const value = input.value;

    const input2 = document.getElementById("InputDiscount");
    const value2 = input2.value;

    const resultP = document.getElementById("ResultP");

    const precioConDescuento = calcularPrecioConDescuento(value, value2);
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}