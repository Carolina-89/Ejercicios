// 1) - A: Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.

let arrayDeFrutas = [];

for (let i = 0; i < 5; i++) {
    let unidadFruta = prompt("Ingrese una fruta");
    arrayDeFrutas.push(unidadFruta) // empuja de a una por vez a las frutas ingresadas mediante el prompt
}
console.log(arrayDeFrutas);


// - B: Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
//*****REVISAR!***** 

let arrayDeFrutas2 = [];
let unidadFruta2 = "";

do {
    unidadFruta2 = prompt("Ingresa otra fruta (elige cancelar para salir)","");
    arrayDeFrutas2.push(unidadFruta2)
    } while (unidadFruta2 != null);

arrayDeFrutas2.pop(null); // borra el null del array

console.log(arrayDeFrutas2);

// - C: Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.

const ambosArrays = arrayDeFrutas.concat(arrayDeFrutas2);
console.log(ambosArrays);

const viceversaArrays = arrayDeFrutas2.concat(arrayDeFrutas);
console.log(viceversaArrays);

// 2) Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.

const ciudades = new Array (
  "Buenos Aires",
  "Tokyo",
  "Estambul",
  "Lima",
  "Nueva York",
  "La Paz",
  "Milan",
  "San Pablo",
  "Paris",
  "Roma"  
);

console.log(ciudades[prompt("Escriba un número del 1 al 10") - 1]);

// 3) Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

// a:
let quitarCiudades = prompt("Ingrese un numero")

ciudades.splice(0, quitarCiudades);
console.log(ciudades); // ej: ingresando 4 muestra desde NY hasta Roma 
 
// b:

quitarCiudades = ciudades.splice(-quitarCiudades);
console.log(ciudades); // ej: ingresando 4 muestra Bs As hasta La Paz

