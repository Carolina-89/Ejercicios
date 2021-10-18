/*
// 1) Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).
 function multiplicacion() {
    let edad = prompt("escriba su edad: ")
    let perro = parseInt(edad) * 7
    alert(perro)
}
multiplicacion(); 
*/

/*
// 2) Crear una función que reciba un nombre y devuelva un saludo.
 function saludo () {
    let nombre = prompt("Escriba su nombre: ")
    alert("Hola " + nombre + ". Cómo estás?")
}
saludo(); 
*/

/* 
// 3) Crear una función que salude

function bienvenida() {
    alert("Bienvenido!")
}
bienvenida(); 
*/

/* 
// 4) Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit)

let tempCelsius = prompt("Ingrese la temperatura en celsius:")
let tempFarenheit = prompt("Ingrese la temperatura en farenheit:")

function calculadoraTemperatura(a,b){
    let farenheit = (parseInt(a) * 1.8) + 32;
    alert("La temperatura es de " + farenheit + "F°");

    let celsius = (parseInt(b)-32) / 1.8;
    alert("La temperatura es de " + celsius + "C°");
}

calculadoraTemperatura(tempCelsius,tempFarenheit); 
*/

/*
// 5) Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
/* 6 → 6! = 720
4 → |4| = 4
-8 → |-8| = 8
50 → 100
11 → 22 */

/* let numero = prompt("Ingrese un numero");

function ejercicioCinco(numero) {
    if ((numero >= 5) && (numero <= 10)) {
        for(let i = numero - 1; i >= 1; i--) {
            numero = numero * i;
        } console.log(numero) 
    } else if (numero < 5) {
        console.log(Math.abs(numero));
    } else if (numero > 10) {
        numero = numero * 2;
        alert(numero)
    }
}

ejercicioCinco(numero); 
*/

/*
// 6) Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. (Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)

let edadUsuario = prompt("Ingrese su edad");
let bebida = prompt("Ingrese una bebida entre cerveza, jugo y agua");
let billeteCliente
let vuelto

function validarEdad(edadUsuario, bebida, billeteCliente, vuelto) {
    if (edadUsuario < 18 && bebida == "cerveza") {
        alert("Sos menor de edad, no podés realizar la compra!")
    } else {
        billeteCliente = prompt("El costo es de $50. Ingrese con cuanto va a pagar")
        vuelto = billeteCliente - 50
        if (billeteCliente < 50) {
            alert("Error. Pague con otro billete de mayor valor")
        } else {
            alert("Su vuelto es de $" + vuelto);
        }
    }
}

validarEdad(edadUsuario, bebida, billeteCliente, vuelto);
*/

/* OPCIÓN B HECHA POR JUAN:

let edadUsuario = prompt("Ingrese su edad");
let bebida = prompt("Ingrese una bebida entre cerveza, jugo y agua");
let billeteCliente
let vuelto

function validarEdad(a,b,c,d) {
    if (a < 18 && b == "cerveza") {
        alert("Sos menor de edad, no podés realizar la compra!")
    } else {
        c = prompt("El costo es de $50. Ingrese con cuanto va a pagar")
        d = 50 - c
        if (c < 50) {
            alert("Error. Pague con otro billete de mayor valor")
        } else {
        alert("Su vuelto es de $" + d);
    }
} }
validarEdad(edadUsuario,bebida,billeteCliente,vuelto);
*/

/*
// 7) Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

let horas = prompt("Escriba las horas que quiera: ");
let minutos = prompt("Escriba los minutos que quiera: ");
let segundos = prompt("Escriba los segundos que quiera: ");

function conversion(h, m, s) {
    h = parseInt(h) * 3600;
    m = parseInt(m) * 60;
    s = s;
    alert("la conversion de horas a segundos es: " + h);
    alert("la conversion de minutos a segundos es: " + m);
    alert("los segundos puestos eran: " + s);
}

conversion(horas, minutos, segundos);
*/

// 8) Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 

/* INCOMPLETO, FALTA FUNCTION, ETC*/
let valores = [1, 2, 3, 4, 5];

let suma = valores.reduce((previo, actual) => previo += actual);
let resultado = suma / valores.length;

console.log(resultado);