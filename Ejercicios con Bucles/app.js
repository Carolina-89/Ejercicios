//// EJERCICIO CON BUCLES ////

// 1) Mostrar los primeros 10 números naturales.
/*
for (let i = 1; i < 11; i++) {
  alert(i); 
}
*/

// 2) Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
/*        
let suma = 0;

for(i = 0; i < 5; i++) {
    suma += parseInt(prompt("Ingrese un numero"));
}
alert(suma)
*/

// 3) Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
/*
let cantidad = prompt("Cuantos números desea ingresar?");
let suma = 0;

for(i = 1; i <= cantidad; i++) {
    let numero = prompt("Ingrese un numero")
    suma += parseInt(numero);
}
alert(suma)
*/

// 4) Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
/*
let suma=0;
let continuar
do {
    let numero;
    numero = prompt("ingrese un numero");
    suma = parseInt(numero) + suma;
    continuar = confirm("desea continuar")
} while (continuar == true)
alert(suma)
*/

// 5) Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
/*
let suma=0;
let continuar
let i=0;
do {
    let numero;
    numero = prompt("ingrese un numero");
    suma = parseInt(numero) + suma;
    continuar = confirm("desea continuar")
    i++;
} while (continuar == true)
alert(suma/i)
*/

// 6) Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 
/*
let numeroUsuario = prompt('Ingrese un numero');
for(let i = 1; i <= numeroUsuario; i++){
    alert(i + '\n');
}
*/

// 7) Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros 
/*
let primerN = prompt("Ingrese un numero");
let segundoN = prompt("Ingrese otro numero mayor");
let texto ="";

do {
    primerN++;
    texto += "El numero es: " + primerN + "\n";
    alert(texto);
    
} while(primerN < (segundoN-1));
*/



// 11) Realizar un programa que pida la base y el exponente y calcule la potencia
/*
const base = parseInt(prompt("Ingrese la base"));
const exponente = parseInt(prompt("Ingrese el exponente"));
let r = 1;

for(let i = 0; i < exponente; i++){
    r = r * base;
}

console.log(r)
*/

// 12) Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
/*
a) Una forma
let numero = prompt("Ingrese un numero");
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial*= i;
}
alert(factorial);
*/
/*
b) Otra forma
let numero = prompt("Ingrese un numero");
let factorial = 1;

for (let i = numero; i > 0; i--) {
    factorial*= i;
}
alert(factorial);
*/

// 13) Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
/*
let numero = parseInt(prompt("Escribe un número"));
let resto = 0;
for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
        alert( i + " es divisor de su numero");
    } else {

    }
}
*/

// 14) Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar: H O L A
/*
let numero = parseInt(prompt("Ingrese un numero"));
let cadena = prompt("Ingrese una cadena de caracteres");

for (let i = 0; i < numero; i++){
    console.log(cadena[i])
} 
*/

// 15) Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 

alert("Prepare su lista de supermercado!");
let articulo;
let lista = [];
let continuar;
let i = 0;

do {
  articulo = prompt("Ingrese un articulo de su lista");
  lista.push(" " + articulo);
  continuar = confirm("Desea seguir agregando articulos?");
  i++;
} while (continuar == true);

alert(lista.join());

