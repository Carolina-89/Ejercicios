// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
/*
let nombreUsuario = prompt("Ingrese su nombre");
alert("Hola " + nombreUsuario + ", bienvenidx!");
alert("Su nombre en mayuscula es: " + nombreUsuario.toUpperCase());
alert("Su nombre en minuscula es: " + nombreUsuario.toLowerCase());
*/

// 2) Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
/*
let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese otro número");

let suma = parseInt(num1) + parseInt(num2);
alert("La suma de sus números es de: " + suma);

let numMayor = Math.max(num1, num2);
let numMenor = Math.min(num1, num2);

let resta = alert("La resta entre el número mayor y el menor es de: " + (numMayor - numMenor));
*/

// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.
/*
let textoDeUser = prompt("Ingrese un texto")
let alertaOConsola = prompt("Elija si desea ver el resultado como ALERTA ó CONSOLA")

textoMayuscula = textoDeUser.toUpperCase();

if(alertaOConsola == "alerta") {
    alert(textoMayuscula);
} else if (alertaOConsola == "consola") {
    console.log(textoMayuscula);
} else {
    alert("Error. Elija ALERTA ó CONSOLA");
}
*/

// 4) Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
/*
let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let operacionElegida = prompt("Ingrese su operación de preferencia entre SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN Y POTENCIA");

let laSuma = parseInt(numero1) + parseInt(numero2);
let laResta = parseInt(numero1) - parseInt(numero2);
let multiplic = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
let potencia = Math.pow(numero1, numero2);

if (operacionElegida == "suma") {
  alert("La suma da: " + laSuma);
} else if (operacionElegida == "resta") {
  alert("La resta da: " + laResta);
} else if (operacionElegida == "multiplicacion") {
  alert("La multiplicación da: " + multiplic);
} else if (operacionElegida == "division") {
  alert("La division da: " + division);
} else if (operacionElegida == "potencia") {
  alert("Su resultado es: " + potencia);
} else {
  alert("Error. Elija una operación");
}
*/

// 5) Vamos a reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
/*
do {
  var preguntaAlUser = confirm("Desea hacer otra operación?");
  var otroNum1 = prompt("Ingrese un numero");
  var otroNum2 = prompt("Ingrese otro numero");
  var operacionElegida2 = prompt("Ingrese su operación de preferencia entre SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN Y POTENCIA");

  if (operacionElegida2 == "suma") {
    var otraSuma = parseInt(otroNum1) + parseInt(otroNum2);
    alert("La suma da: " + otraSuma);
  } else if (operacionElegida2 == "resta") {
    var otraResta = parseInt(otroNum1) - parseInt(otroNum2);
    alert("La resta da: " + otraResta);
  } else if (operacionElegida2 == "multiplicacion") {
    var otraMultiplic = parseInt(otroNum1) * parseInt(otroNum2);
    alert("La multiplicación da: " + otraMultiplic);
  } else if (operacionElegida2 == "division") {
    var otraDivision = parseInt(otroNum1) / parseInt(otroNum2);
    alert("La division da: " + otraDivision);
  } else if (operacionElegida2 == "potencia") {
    var otraPotencia = Math.pow(otroNum1, otroNum2);
    alert("Su resultado es: " + otraPotencia);
  } else {
    alert("Error. Elija una operación");
  }
} while (preguntaAlUser === true);
*/

// 6) Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.
/*
let nombreAlumno = "";
let todosLosNombres = [];

while(nombreAlumno != "salir") {
    nombreAlumno = prompt("Ingrese nombre del alumno (Escriba SALIR cuando desee hacerlo)","")
    todosLosNombres.push(nombreAlumno);
}

todosLosNombres.pop("salir");

alert("Los alumnos del curso son: " + todosLosNombres);
*/

// 7) Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.
/*
const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

for(var i = 0; i < ej7Nombres.length; i++) {
    alert(ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1));
}
*/

// 8) Para una veterinaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
/*
// ***** NO TOMA OPERADOR DE COMPARACIÓN: == *****
const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

let nombreMascota = prompt("Ingrese el nombre de la mascota")

if (nombreMascota === "Fido" || nombreMascota === "Gertrudis") {
    alert("Hay que vacunar contra la rabia");
} else if (nombreMascota === "Tuerca") {
    alert("Entregar alimento balanceado");
} else if (nombreMascota.length > 6) {
    alert("Nombre largo");
} else if (nombreMascota.length <= 3) {
    alert("Nombre corto");
} else {
    alert("Ingrese un nombre valido");
} 
*/

// 9) Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos.
//- Cada menor de edad pagará el menú $450 y cada adulto, $700.
//- Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura.
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar.
/*
const ej9restaurant = [25,17,18,44,12,9,36,50];
let nroMenores = prompt("Ingrese cuantos menores de edad son");
let nroAdultos = prompt("Ingrese cuantos mayores son");
let grupo = parseInt(nroMenores) + parseInt(nroAdultos);

let costoMenores = 450 * nroMenores;
let costoAdultos = 700 * nroAdultos;
let costoTotal = costoMenores + costoAdultos;
let totalConDesc 

if (nroAdultos > 4) {
    totalConDesc = costoTotal - (costoTotal*0.10)
}

alert("La cantidad de comensales es de: " + grupo + " y el costo total a pagar es de: " + totalConDesc)
*/

// 10) De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes.
// Para ello:
//- Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//- Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//- Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//- Agregar el código de paciente adelante en la cola (array) de turnos
//- Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//- Agregar el código de paciente al final de la cola (array) de turnos
//- Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//- Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//- Agregar el código de paciente al final de la cola (array) de turnos

//- Si todos los pacientes fueron ingresados, informar en pantalla:
//- Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//- Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//- Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP

// *****INCOMPLETO!!***** 
/*
var codigoPaciente = prompt("Ingrese código de paciente");
var valoracionVip;
var preguntaNuevo
var listaTurnos = [];

function automatProc() {
  if (codigoPaciente >= 1 && codigoPaciente < 100) {
    alert("Es un paciente VIP");
    valoracionVip = prompt("Califique la calidad del servicio del 1 al 10");
    listaTurnos.unshift(codigoPaciente);
  } else if (codigoPaciente >= 100 && codigoPaciente <= 500) {
    alert("Es un paciente de prepaga");
    listaTurnos.push(codigoPaciente); // dudas si hay que usar otra variable por paciente
  } else if (codigoPaciente >= 501 && codigoPaciente < 1000) {
    preguntaNuevo = confirm("Es un paciente nuevo. Desea pasarse a VIP?");
    if(preguntaNuevo == true){
        listaTurnos.push(codigoPaciente);
    }
  }
}
automatProc();
*/