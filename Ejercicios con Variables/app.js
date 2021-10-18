// Ejercicio 0
/*var nombreDeLaPersona = window.prompt("Cómo es tu nombre?");
    
var apellidoDeLaPersona = window.prompt("Cómo es tu apellido?");

alert("Hola, " + nombreDeLaPersona + " " + apellidoDeLaPersona+"!")
*/

// Ejercicio 1
/*
var primerNumero = window.prompt("Seleccione primer numero:");
    
var segundoNumero = window.prompt("Seleccione segundo numero:");

resultado = parseInt(primerNumero) + parseInt(segundoNumero);

console.log(resultado); 
*/

// Ejercicio 2
/*
var edadDePersona = window.prompt("Escribe tu edad");
var resultadoDeEdad = 2021 - parseInt(edadDePersona);
console.log("Naciste en el año: " + resultadoDeEdad);
*/

// Ejercicio 3
/*
alert("Tu saldo de cuenta es de $250000")
var dineroRetirado = window.prompt("Cuanto dinero deseas retirar?")
var saldo = 250000 - parseInt(dineroRetirado)
alert("Tu nuevo saldo es de: $" + saldo)
*/

// Ejercicio 4
/*
var primerNota = window.prompt("Escriba la primer nota");
var segundaNota = window.prompt("Escriba la segunda nota");
var tercerNota = window.prompt("Escriba la tercer nota");
var resultado = (parseInt(primerNota) + parseInt(segundaNota) + parseInt(tercerNota)) / 3;
console.log("El promedio es: " + resultado)
*/

// Ejercicio 5
/*
var medidaMetros = window.prompt("Ingrese una medida en metros");
var conversionApies = parseInt(medidaMetros) * 3.28;
alert("Su medida en pies es de: " + conversionApies);

var conversionAcm = parseInt(medidaMetros) * 100;
alert("Su medida en centimetros es de: " + conversionAcm);

var conversionApulg = parseInt(medidaMetros) * 39.37;
alert("Su medida en pulgadas es de: " + conversionApulg);
*/

// Ejercicio 6
/*
var primerNro = window.prompt("Ingrese un numero");
var segundoNro = window.prompt("Ingrese otro numero");
var resultadoSuma = parseInt(primerNro) + parseInt(segundoNro);
alert("La suma de sus dos números es de: " + resultadoSuma);

var tercerNro = window.prompt("Ingrese un numero más");
var resultadoFinal = tercerNro * resultadoSuma;
alert("El resultado es de: " + resultadoFinal);
*/

// Ejercicio 7
/*
var nroMinutos = window.prompt("Ingrese un número en minutos");
var conversionAsegundos = parseInt(nroMinutos) * 60;
alert("Su número en segundos es de: " + conversionAsegundos);
*/

// Ejercicio 8
/*
var medidaBase = window.prompt("Ingrese la medida de la base en cm");
var medidaAltura = window.prompt("Ingrese la medida de la altura en cm");
var resultado = parseInt(medidaBase) * parseInt(medidaAltura);
alert("Su resultado es: " + resultado + " cm ²");
*/

// Ejercicio 9
/*
var medidaBase = window.prompt("Ingrese la medida de la base en cm");
var medidaAltura = window.prompt("Ingrese la medida de la altura en cm");
var resultado = parseInt(medidaBase) * parseInt(medidaAltura) / 2;
alert("El area del triangulo equilatero es: " + resultado + " cm");
*/

// Ejercicio 10
/*
var montoAdescontar = prompt("Ingrese su monto");
var numeroDeDescuento = prompt("Ingrese su número de descuento");
var resultado = parseInt(montoAdescontar) - parseInt(numeroDeDescuento);
alert("El precio final es de: $" + resultado)
*/

// Ejercicio 11
/*
var nombre = prompt ("Ingrese su nombre");
var edad = prompt ("Ingrese su edad");
var año = 2021 - parseInt(edad);
alert("Hola, " + nombre + ", usted nació en el año " + año);
*/

// Ejercicio 12
/*
var nombre = prompt ("Ingrese su nombre");
var temperatura = prompt ("Ingrese la temperatura en celsius");
var resultado = (parseInt(temperatura) * 1.8) + 32;
console.log("Su nombre es: " + nombre + ", la temperatura en celsius es: " + temperatura + " y su equivalente en farenheit es " + resultado);
*/

// Ejercicio 13
/*
var nombre = prompt ("Ingrese su nombre");
var temperatura = prompt ("Ingrese la temperatura en fahrenheit");
var resultado = (parseInt(temperatura) - 32) / 1.8;
console.log("Su nombre es: " + nombre + ", la temperatura en fahrenheit es: " + temperatura + " y su equivalente en celsius es " + resultado);
*/

// Ejercicio 14 (REPASAR PARA ENTENDER)
/*
var unNumero = prompt("Escriba un número: ");
var otroNumero = parseInt(unNumero);
var resultado = ((otroNumero + 5) * 10);
console.log(resultado % 3);
alert(Math.round(resultado/3));
*/

                // BONUS //         

// Ejercicio 0
/*
var primerNumero = prompt("Escribe primer numero:");
var segundoNumero = prompt("Escribe segundo numero:");
var resultado = primerNumero + segundoNumero;
console.log("Tu resultado es: " + resultado);
*/

// Ejercicio 1 
/*
var cantidadDeDias = prompt("Escribe la cantidad de dias: ");
var resultadoAsegundos = parseFloat(cantidadDeDias) * 86400;
console.log("El equivalente en segundos es de: " + resultadoAsegundos);
*/

// Ejercicio 2 
/*
var cantidadKm = prompt("Ingrese los Km que desea recorrer");
var velocidadKmPorHora = prompt("Ingrese la velocidad a la que desea ir en Km/h");
var tiempoEnHoras = parseInt(cantidadKm) / parseInt(velocidadKmPorHora);
var tiempoEnMinutos = tiempoEnHoras*60;
alert("El tiempo estimado en llegar es de " + tiempoEnMinutos + " minutos");
*/

// Ejercicio 3

var sueldoBruto = prompt("Ingrese sueldo bruto");
var obraSocial = parseInt(sueldoBruto) * 3/100;
var jubilacion = parseInt(sueldoBruto)* 11/100;
var ley = parseInt(sueldoBruto) * 3/100;
alert("Obra social $ " + obraSocial);
alert("Jubilacion $ " + jubilacion);
alert("Ley 19032 $ " + ley);
var sueldoNeto = sueldoBruto - obraSocial - jubilacion - ley; 
alert("Su sueldo neto es de: " + sueldoNeto);
