    ////// EJERCICIOS CON CADENAS DE TEXTOS ////// 

// 1) Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”
/*
a) Con If/Else:
let texto = prompt("Ingrese un texto");
if (texto.includes("a") == true) {
    alert("Tu texto contiene la letra A");
}   else {
    alert("Tu texto no contiene la letra A");
}
*/

// 2) Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas. 
/*
let texto = prompt("Ingrese un texto");
alert(texto.toUpperCase(texto));
alert(texto.toLowerCase(texto));
*/

// 3) Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza. 
/*
a)
let palabra = prompt("Ingrese una palabra");
alert("Tu palabra comienza con la letra: " + palabra[0]);

b)
var palabra = prompt("Ingrese una palabra");
alert("Tu palabra comienza con la letra: " + palabra.charAt(0));
*/

// 4) Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
/*
let frase = prompt("Ingrese una frase");
console.log("Tu frase tiene: " + frase.length + " caracteres");
*/

// 5) Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
/*
let numero = prompt("Ingrese un texto");
alert("Su número contiene " + numero.length + " digitos");
*/

// 6) Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina. 
/*
let palabra = prompt("Ingrese una palabra");
console.log("La ultima letra de su palabra es: " + palabra[palabra.length-1]);
*/

// 7) Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
/*
let frase = prompt("Ingrese una frase");
let fraseConAsteriscos = frase.replace(/ /g, "*");
console.log("Tu frase con asteriscos es: " + fraseConAsteriscos);
*/

// 8) Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
/*
let letra = prompt("Ingrese una letra");
let texto = prompt("Ingrese un texto");
if (texto.includes(letra)) {
  console.log("Tu texto contiene la letra: " + letra);
} else {
  console.log("Tu texto no contiene la letra: " + letra);
}
*/

// 9) Solicitar un texto y mostrarlo todo menos la primera letra.
/*
let texto = prompt("Ingrese un texto");
let textoSinPrimerLetra = texto.slice(1);
alert("Tu nuevo texto sin la primer letra quedaría así: " + textoSinPrimerLetra);
*/

// 10) Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
/*
var nombre = prompt("Ingrese su nombre en minúscula")
alert("Su nombre con la primer letra en mayúscula quedaría así: " + nombre.charAt(0).toUpperCase() + nombre.slice(1)); 
*/


            ///// EJERCICIOS CON CONDICIONALES (parte 1) /////
            
// 1) Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 
/*
var medidaMetros = window.prompt("Ingrese una medida en metros");
var conversionApies = parseInt(medidaMetros) * 3.28;
var conversionAcm = parseInt(medidaMetros) * 100;
var conversionApulg = parseInt(medidaMetros) * 39.37;

if (Number(medidaMetros)) {
  alert("Su medida en pies es de: " + conversionApies);
  alert("Su medida en centimetros es de: " + conversionAcm);
  alert("Su medida en pulgadas es de: " + conversionApulg);
} else {
  alert("Error");
}
*/

// 2) Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .
/*
let edadUser = prompt("Ingrese su edad");

if(edadUser < 18) {
  console.log("Es menor de edad");
} else {
  console.log("Es mayor de edad");
}
*/

// 3) Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.
/*
let sabores = prompt("Ingrese el o los sabores a su gusto");
let coberturaChocolate = confirm("Desea agregar cobertura de chocolate?");

if(coberturaChocolate == true) {
  alert("Su helado de " + sabores + " con cobertura de chocolate cuesta $180");
} else {
  alert("Su helado de " + sabores + " cuesta $150");
}
*/

// 4) Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
/*
let primerNumero = window.prompt("Seleccione primer numero:");
let segundoNumero = window.prompt("Seleccione segundo numero:");
resultado = parseInt(primerNumero) + parseInt(segundoNumero);

console.log(resultado); 

if(resultado % 2 == 0) {
  alert("El número " + resultado + " es par");
} else {
  alert("El número " + resultado + " es impar");
}
*/

// 5) Solicitar al usuario un número e indicar si es positivo, negativo o cero.
/*
let num = parseInt(prompt("Ingrese un número")); 

if(num < 0) {
  console.log("El número es negativo");
} else if (num > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es cero");
}
*/

// 6) Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
/*
let monto = prompt("Ingrese un monto");
let descuento = monto * 0.10;
let totalConDesc = monto - descuento;

if (monto > 2000) {
  alert("Total a pagar con descuento: $" + totalConDesc);
} else {
  alert("Total a pagar: $" + monto);
}
*/
  
// 7) Solicitar al usuario que ingrese una cadena de texto y luego una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)
/*
let cadenaTexto = prompt("Ingrese una frase");
let posicion = parseInt(prompt("Ingrese una posición"));
let digito = cadenaTexto.charAt(posicion);

if ((digito == "a") || (digito == "e") || (digito == "i") || (digito == "o") || (digito == "u")) {
  alert("El digito indicado es una vocal");
} else {
  alert("El digito indicado no es una vocal");
}
*/

// 8) Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 
/*
let nota = prompt("Ingrese una nota del 1 al 10");

if((nota <= 1) || (nota < 4)) {
  alert("Aplazado");
} else if((nota == 4) || (nota == 5)) {
  alert("Reprobado");
}else {
  alert("Aprobado");
}
*/

// 9) Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
/*
let primerNum = prompt("Ingrese un número");
let segundoNum = prompt("Ingrese otro número");

let mayorNum = Math.max(primerNum,segundoNum);

if(primerNum == segundoNum) {
  alert("Los dos números son iguales");
} else {
  alert("El número mayor es: " + mayorNum);
}
*/

// 10) Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
/*
let mes = prompt("Ingrese un mes del año");

if (mes == "febrero") {
  alert("El mes ingresado tiene 28 días");
} else if((mes == "abril") || (mes == "junio") || (mes =="septiembre") || (mes =="noviembre")) {
  alert("El mes ingresado tiene 30 días");
} else {
  alert("El mes ingresado tiene 31 días")
}
*/

// 11) Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
/*
let nro1 = prompt("Ingrese un numero");
let nro2 = prompt("Ingrese otro numero"); 
let nro3 = prompt("Ingrese un numero más");

let nroMayor = Math.max(nro1, nro2, nro3);
alert("El mayor de sus numeros ingresado es el " + nroMayor);
*/

// 12) Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).
/*
let edadUsuario = prompt("Ingrese su edad");
let bebidaElegida = prompt("Ingrese una bebida entre Cerveza, Jugo y Agua")
let billeteCliente
let vuelto

if (edadUsuario < 18 && bebidaElegida == "cerveza") {
  alert("Sos menor de edad, no podés realizar la compra!")
} else {
  billeteCliente = prompt("El costo es de $50. Ingrese con cuanto va a pagar")
  vuelto = billeteCliente - 50
  if (billeteCliente < 50) {
      alert("Error.")
  } else {
      alert("Su vuelto es de $" + vuelto);
  }
}
*/

// 13) Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
/*
var mes;
mes = prompt("Elegí un mes del año usando numeros del 1 al 12");

switch(mes){
    case "1":
        alert("Enero");
        break;
    case "2":
        alert("Febrero");
        break;
    case "3":
        alert("Marzo");
        break;
    case "4":
        alert("Abril");
        break;
    case "5":
        alert("Mayo");
        break;
    case "6":
        alert("Junio");
        break;
    case "7":
        alert("Julio");
        break;
    case "8":
        alert("Agosto");
        break;
    case "9":
        alert("Septiembre");
        break; 
    case "10":
        alert("Octubre");
        break;
    case "11":
        alert("Noviembre");
        break;   
    case "12":
        alert("Diciembre");
        break;
    default:
        alert("Solo son válidos los números del 1 al 12");
        break;
}
*/


// BONUS:

// 1) Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto menor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir menos dinero del disponible.
/*
let saldoDisponible = parseInt(15000);
let clave = 1234;
let clave4digitos = prompt("Ingrese su clave de 4 digitos");
let montoAretirar = parseInt(prompt("Ingrese monto que desea retirar"));
let nuevoSaldo

if((clave4digitos == clave) && (montoAretirar <= saldoDisponible)) {
  nuevoSaldo = saldoDisponible - montoAretirar
  alert("Su saldo en cuenta es de " + nuevoSaldo)
} else if((clave4digitos !== clave) && (montoAretirar <= saldoDisponible)) {
  alert("Su clave es incorrecta");
} else if((montoAretirar > saldoDisponible) && (clave4digitos == clave)) {
  alert("Monto excedido. Ingrese un valor menor");
} else {
  alert("Clave y/o monto incorrecto(s)")
}
*/

// 2) Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.
/*
let diaNacimiento = parseInt(prompt("Ingrese su día (número) de nacimiento"));
let mesNacimiento = prompt("Ingrese su mes de nacimiento de enero a diciembre");

if (mesNacimiento == "diciembre") {
  if(diaNacimiento <= 21) {
    alert("Tu signo es Sagitario")
  } else {
    alert("Tu signo es Capricornio")
  }
} else if (mesNacimiento == "enero") {
    if(diaNacimiento <= 20) {
      alert("Tu signo es Capricornio")
    } else {
      alert("Tu signo es Acuario")
    }
} else if (mesNacimiento == "febrero") {
    if(diaNacimiento <= 19) {
      alert("Tu signo es Acuario")
    } else {
      alert("Tu signo es Piscis")
    }
} else if (mesNacimiento == "marzo") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Piscis")
  } else {
    alert("Tu signo es Aries")
  }
} else if (mesNacimiento == "abril") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Aries")
  } else {
    alert("Tu signo es Tauro")
  }
} else if (mesNacimiento == "mayo") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Tauro")
  } else {
    alert("Tu signo es Geminis")
  }
} else if (mesNacimiento == "junio") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Geminis")
  } else {
    alert("Tu signo es Cancer")
  }
} else if (mesNacimiento == "julio") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Cancer")
  } else {
    alert("Tu signo es Leo")
  }
} else if (mesNacimiento == "agosto") {
  if(diaNacimiento <= 21) {
    alert("Tu signo es Leo")
  } else {
    alert("Tu signo es Virgo")
  }
} else if (mesNacimiento == "septiembre") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Virgo")
  } else {
    alert("Tu signo es Libra")
  }
} else if (mesNacimiento == "octubre") {
  if(diaNacimiento <= 20) {
    alert("Tu signo es Libra")
  } else {
    alert("Tu signo es Escorpio")
  }
} else if (mesNacimiento == "noviembre") {
  if(diaNacimiento <= 21) {
    alert("Tu signo es Escorpio")
  } else {
    alert("Tu signo es Sagitario")
  }
} else {
  alert("Ingrese un día y/o mes válido(s)")
}
*/

// 3) Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 
/*
let hora = prompt("Ingrese un horario en punto")
let username = prompt("Ingrese su nombre")

if (hora >= 5 && hora < 12 ) {
  alert("Buenos días, " + username + "!")
} else if (hora >= 12 && hora < 19) {
  alert("Buenas tardes, " + username + "!")
} else {
  alert("Buenas noches, " + username + "!")
}
*/

// https://docs.google.com/document/d/1x_XUeO-qIY8YIjq3OFzypojWyBuiGx9US2EWhK7wdiQ/edit

