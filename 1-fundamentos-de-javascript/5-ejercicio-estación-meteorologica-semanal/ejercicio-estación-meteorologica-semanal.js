/*

EJERCICIO 5: ESTACION METEOROLOGICA SEMANAL

DIFICULTAD: 2.5/5

OBJETIVO

Este ejercicio es distinto a los anteriores: en vez de un solo cálculo, vas a procesar datos a lo largo de una semana usando un bucle 
for que se repite 7 veces, acumulando información en cada vuelta (contadores, suma, máximo y mínimo), y recién al final tomar una 
decisión con switch. Combina: for, if/else, operadores lógicos (&&), ??, y switch.

ENUNCIADO

Una estación meteorológica quiere generar un reporte semanal a partir de las temperaturas de 7 días.

PASO 1: Recolección de datos (usa un bucle for que vaya del día 1 al día 7):

En cada vuelta del bucle:

Pide la temperatura del día con prompt(), indicando en el mensaje qué día es (ej: "Ingresa la temperatura del Día 3:").
Si el usuario cancela el prompt (null), asume 20°C para ese día usando ??.
Convierte el valor a número.

PASO 2: Mientras recorres los 7 días, debes ir acumulando (todo dentro del mismo for, sin arrays):

Suma total de las temperaturas (para calcular el promedio al final).
    - Contador de días calurosos (temperatura > 30°C).
    - Contador de días templados (temperatura entre 15°C y 30°C, ambos inclusive) — usa && para esta condición.
    - Contador de días fríos (temperatura < 15°C).
    - Temperatura máxima de la semana (debes comparar cada nuevo valor contra el máximo que llevas guardado hasta el momento).
    - Temperatura mínima de la semana (misma lógica que el máximo, pero al revés).

PIENSA: ¿con qué valor inicial deberías arrancar tus variables de máximo y mínimo antes de empezar el bucle, para que la primera comparación funcione correctamente?

PASO 3: Al terminar el bucle:

Calcula el promedio semanal (suma total dividida entre 7).
Usa if/else para clasificar ese promedio en una variable de texto ("fria", "templada" o "calurosa"), con los mismos rangos del paso 2.
Usa un switch sobre esa variable de texto para mostrar una recomendación de vestimenta distinta para cada categoría (inventa tú los tres mensajes).

PASO 4: Mostrar el reporte final con alert(), incluyendo como mínimo: el promedio, la temperatura máxima, la mínima, cuántos días fueron
calurosos/templados/fríos, y la recomendación de vestimenta.

RESTRICCIONES

    - Debes usar un for para los 7 días (no while, para practicar contadores con inicio, condición y paso conocidos de antemano).
    - No uses arrays ni objetos: todo se resuelve con variables sueltas y acumuladores.
    - No uses el objeto Math (aún no lo hemos estudiado) — no lo necesitas para este ejercicio.
    - No uses template literals; concatena con +.
    - El uso de funciones es opcional, pero si te ordena mejor el código, puedes usarlas.
    - Debes usar ?? al menos una vez (para el caso de cancelar el prompt).
    - Debes usar && al menos una vez (para la condición de "templado").

EJEMPLO DE ENTRADA Y SALIDA

ENTRADA: Día 1 = 25, Día 2 = 32, Día 3 = 18, Día 4 = 29,
        Día 5 = 35, Día 6 = 20, Día 7 = 15

SALIDA (alert):

"Reporte semanal:
Promedio: 24.86°C
Máxima: 35°C
Mínima: 15°C
Días calurosos: 2
Días templados: 5
Días fríos: 0

RECOMENDACION: Lleva ropa liviana, pero ten un abrigo a mano por si refresca."

(No te preocupes por redondear el promedio a la perfección — sin Math ni métodos de string es normal que salga con varios decimales; 
si quieres redondearlo con operaciones matemáticas simples, es un plus, pero no es obligatorio).


PISTAS (solo si te trabas)
    - Para el máximo, una estrategia común es iniciar la variable con un valor muy bajo (por ejemplo, un número imposible de superar hacia abajo) 
    antes del bucle; para el mínimo, iniciarla con un valor muy alto. Así la primera comparación siempre "gana" y queda guardado el primer dato real.
    - El contador de días (for (let i = 1; i <= 7; i++)) es distinto del contador de "días calurosos" — necesitas variables separadas para cada cosa.
    - Recuerda que la condición de "templado" necesita dos comparaciones unidas con &&: que sea mayor o igual a 15 y menor o igual a 30.
    - El switch va después del bucle, no dentro — porque depende del promedio final, no de cada día individual.
    -El promedio se calcula una sola vez, al final, dividiendo la suma acumulada entre 7.

*/