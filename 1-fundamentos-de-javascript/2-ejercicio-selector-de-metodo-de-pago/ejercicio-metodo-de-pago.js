/*
EJERCICIO 2: Selector de método de pago

DIFICULTAD: (1/5)

OBJETVIO:

Practicar prompt(), conversión de tipos, la sentencia switch y alert(). Es un ejercicio distinto al anterior 
porque en vez de comparar rangos numéricos con if/else, trabajarás con valores discretos usando switch.

ENUNCIADO:

Una tienda quiere un pequeño programa en la caja registradora para confirmar el método de pago elegido por el cliente. 
Las opciones son:

OPCION INGRESADA	    METODO DE PAGO
1	                    Efectivo
2	                    Tarjeta de crédito
3	                    Tarjeta de débito
4	                    Transferencia bancaria
Cualquier otro valor	Opción no válida

TU SCRIPT DEBE:

    1. Pedir al cliente que ingrese un número del 1 al 4 con prompt(), mostrando en el mensaje 
    del prompt las opciones disponibles.
    
    2. Convertir el valor ingresado a número.
    
    3. Usar una sentencia switch (con su correspondiente default) para determinar el método de pago.

    4. Mostrar con alert() un mensaje que confirme el método elegido, por ejemplo: "Pagarás con: Efectivo".

RESTRICCIONES:

    1. Debes usar switch, no if/else.

    2. No olvides el default para manejar valores no válidos (incluyendo números fuera de rango, como 0 o 5).
    
    3. No uses template literals; concatena con +.
    
    4. No uses funciones; todo el código va directo en el script.

EJEMPLO DE ENTRADA Y SALIDA:

Entrada (prompt): 2
Salida (alert): "Pagarás con: Tarjeta de crédito"

Entrada (prompt): 4
Salida (alert): "Pagarás con: Transferencia bancaria"

Entrada (prompt): 9
Salida (alert): "Opción no válida"
*/


let metodoDePago = prompt("Ingresa un numero:");

let metodoDePagoAnumero = Number(metodoDePago);

let metodosDePagosDisponibles = ["Efectivo", "Tarjeta de crédito", "Tarjeta de débito", "Transferencia bancaria", "Opción no válida"];

switch (metodoDePagoAnumero) {
    case 1:
        alert("Pagas con: " + metodosDePagosDisponibles[0]);
        break;

    case 2:
        alert("Pagas con: " + metodosDePagosDisponibles[1]);
        break;

    case 3:
        alert("Pagas con: " + metodosDePagosDisponibles[2]);
        break;

    case 4:
        alert("Pagas con: " + metodosDePagosDisponibles[3]);
        break;

    default:
        alert("Pagas con: " + metodosDePagosDisponibles[4]);
        break;

}