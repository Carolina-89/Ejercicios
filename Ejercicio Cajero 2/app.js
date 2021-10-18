function inicioSesion() {
    user = prompt("Ingrese su usuario")
    password = prompt("Ingrese su contraseña")
    if (user == "fulanito" && password == "123456") {
        window.location.replace("./menu.html")
    }  
}

function saldoActual() {
    alert("Su saldo actual es de: 20000")
}

function retirarDinero() {
    prompt("Ingrese monto a retirar")
}

function depositarDinero() {
    prompt("Ingrese monto a depositar")
}

function cambiarClave() {
    prompt("Ingrese su nueva clave")
}

function cerrarSesion() {
    window.location.replace("./index.html")
}