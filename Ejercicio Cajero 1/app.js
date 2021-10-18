            ///// EJERCICIO: Algoritmo de cajero /////

//https://docs.google.com/document/d/17b8R_jqQp73KudMIApTtmQa6FW5lEMNV9rFaf4m64WI/edit

let user = prompt("Ingrese su nombre de usuario")
let password = prompt("Ingrese contraseña")
let repeatPassword = prompt("Ingrese su contraseña nuevamente")

if(password === repeatPassword) {
    alert("Ud. se ha logueado correctamente")
} else {
    alert("Su contraseña no coincide, no puede loguearse")
}

let accion = prompt("Elija un número de opción: \n 1) Ver saldo actual \n 2) Retirar dinero \n 3) Depositar dinero en su cuenta \n 4) Cambiar su clave")

if (accion === "1") { 
alert("Su saldo actual es de $21300")
} else if (accion === "2") {
    prompt("Ingrese monto a retirar")
} else if (accion === "3") {
    prompt("Ingrese monto a depositar")
} else if (accion === "4") {
    prompt("Ingrese nueva contraseña")
}

