/*

EJERCICIO 1: Calculadora de tarifas de cine

DIFICULTAD: (1/5)

OBJETIVO:

Practicar prompt(), conversión de tipos, el operador ?? (nullish coalescing), estructuras if / else if / else y funciones.

ENUNCIADO:

Un cine quiere automatizar el cálculo del precio de sus entradas según la edad del cliente. Las categorías son:

EDAD	                    PRECIO
0 a 12 años (inclusive)	    $5
13 a 17 años (inclusive)	$8
18 a 64 años (inclusive)	$12
65 años o más	            $6

Debes crear una función llamada calcularPrecioEntrada que reciba la edad como parámetro (un número) y devuelva 
(con return, no con alert) el precio correspondiente.

Además, en el cuerpo principal de tu script:

    1. Pide la edad al usuario con prompt().

    2. Si el usuario cancela el prompt (lo cual devuelve null), asume que la edad es 18 usando el operador ??.

    3. Convierte el valor recibido a número.

    4. Llama a tu función y muestra el resultado con alert(), con un mensaje claro, por ejemplo: "El precio de tu entrada es: $12".

RESTRICCIONES:

    1. No uses arrays, objetos ni métodos de strings.
    
    2. No uses template literals (``); construye el mensaje concatenando con +.
    
    3. La lógica de decisión de precio debe estar dentro de la función, no fuera.

    4. Debes manejar el caso donde el usuario cancela el prompt (usando ??).

    5. Considera qué pasa si el usuario ingresa algo que no es un número válido (piensa qué tipo de dato resulta 
    y cómo podrías detectarlo con lo que ya sabes, aunque no es obligatorio resolverlo a la perfección).


EJEMPLO DE ENTRADA Y SALIDA:

Entrada (prompt): 10
Salida (alert): "El precio de tu entrada es: $5"

Entrada (prompt): 70
Salida (alert): "El precio de tu entrada es: $6"

Entrada (prompt): [usuario presiona Cancelar]
Salida (alert): "El precio de tu entrada es: $12"

PISTAS SOLO SI TE TRABAS:

    1. Recuerda que prompt() siempre devuelve un string o null, nunca un número directamente.
    
    2. El operador ?? solo actúa cuando el valor a su izquierda es null o undefined — no cuando es un string vacío "" o 0.
    
    3. Piensa en el orden de tus condiciones if/else if: ¿qué pasa si evalúas de mayor a menor o de menor a mayor? 
    ¿Cuál es más limpio aquí?
    
    4. Number() es tu amigo para la conversión de tipos.
*/ 