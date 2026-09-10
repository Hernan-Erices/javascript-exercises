/*
EJERCICIO 6: Cierre de caja del estacionamiento

DIFICULTAD: 2.5/5

Objetivo:
Introduce un bucle while (true) combinado con break y continue.
Se procesa una cantidad desconocida de elementos, donde el propio
usuario decide cuándo termina el proceso, y donde algunas vueltas
del bucle deben saltarse sin ejecutar el resto del código.

ENUNCIADO:
Un estacionamiento quiere un sistema para cobrar a los autos que se
van retirando durante el turno, pero no se sabe de antemano cuántos
autos van a pasar.

PASO 1: Bucle principal:

Usa un while (true) para procesar autos, uno por uno, indefinidamente.
En cada vuelta:
    1. Pide con prompt() las horas que estuvo estacionado el auto,
        indicando también la opción de cerrar caja. Ejemplo:
        "Ingresa las horas estacionadas (o -1 para cerrar caja):"
    2. Convierte el valor a número.
    3. Si el valor es exactamente -1, termina el bucle con break
        (se cierra la caja, no se procesa nada más).
    4. Si el valor es negativo (pero distinto de -1) o es 0, es un
        dato inválido: no se cobra ni se cuenta. Usa continue para
        saltar directamente a la siguiente vuelta.

PASO 2: Tarifa escalonada (usa if/else), solo para valores válidos (> 0):

    - Hasta 1 hora (inclusive):        Gratis ($0) - período de gracia
    - Más de 1 y hasta 3 horas:        $500 por cada hora (horas × 500)
    - Más de 3 horas:                  $1500 (primeras 3 horas)
                                        + $800 por cada hora adicional
                                        por encima de 3

PASO 3: - Acumuladores (variables sueltas, sin arrays):
    - Total recaudado en el turno.
    - Cantidad de autos procesados (horas > 0: incluye pagos y gracia).
    - Cantidad de autos en período de gracia (los que no pagaron nada).
    - Hora máxima registrada.

PASO 4 - Al salir del bucle (después del break):
    1. Muestra con alert() un resumen: total recaudado, autos procesados,
        autos con período de gracia, y hora máxima registrada.
    2. Usa if/else: si el total recaudado fue mayor a $5000, agrega
        "Día de alta demanda"; en caso contrario, "Día tranquilo".

RESTRICCIONES:
    - while (true) como estructura del bucle principal (no for).
    - break para terminar el bucle cuando se ingrese -1.
    - continue para saltar entradas inválidas (negativos != -1, o 0).
    - No arrays, no objetos, no Math.
    - No template literals; concatenar con +.
    - Funciones: opcional.

EJEMPLO DE ENTRADA Y SALIDA:

    Entrada: 0.5   -> válido, período de gracia (gratis)
    Entrada: 2     -> válido, cobra $1000
    Entrada: -5    -> inválido, se salta (continue)
    Entrada: 5     -> válido, cobra $1500 + (2 × $800) = $3100
    Entrada: -1    -> cierra caja (break)

    Salida (alert):
    "Resumen del turno:
    Total recaudado: $4100
    Autos procesados: 3
    Autos con período de gracia: 1
    Hora máxima registrada: 5
    Día tranquilo"

PISTAS:

    1. Estructura básica:
        while (true) {
        ...pedir dato...
        if (dato === -1) break;
        if (dato <= 0) continue;
        ...resto de la lógica...
        }
    2. continue ya evita que se ejecute lo que sigue, no necesitas else.
    3. Hora máxima: misma lógica que en el ejercicio de la estación
        meteorológica (comparar contra el máximo guardado hasta ahora).
    4. Los acumuladores deben declararse antes del while.
    5. El período de gracia también cuenta como "auto procesado".
*/