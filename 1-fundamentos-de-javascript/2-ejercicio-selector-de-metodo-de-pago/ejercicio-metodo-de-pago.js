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

    1. Pedir al cliente que ingrese un número del 1 al 4 con prompt(), mostrando en el mensaje del prompt las opciones disponibles.
    
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

PISTAS SOLO SI TE TRABAS:

    1. Recuerda que switch compara con igualdad estricta (===), así que asegúrate de que el valor que compares 
    sea realmente un número, no un string.
    
    2. No olvides el break; al final de cada case, o el código "caerá" al siguiente caso (esto se llama fall-through).

    3. El default no necesita break si está al final, pero es buena práctica igual ponerlo por claridad.
*/