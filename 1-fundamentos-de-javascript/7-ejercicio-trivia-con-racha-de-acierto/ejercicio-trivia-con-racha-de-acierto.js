/*
Ejercicio 7: Trivia con racha de aciertos

Dificultad: 2.5/5

OBJETIVO:
Practicar function expressions o arrow functions (obligatorias esta vez,
no opcionales), el operador ternario, un bucle for de cantidad fija, y
un patrón nuevo: un contador de "racha" que crece con cada acierto y
se reinicia a 0 apenas hay un fallo.

ENUNCIADO:
Una app de trivia quiere calcular el puntaje de un jugador a lo largo
de 5 preguntas, aplicando un bono cuando el jugador acumula una racha
de respuestas correctas.

PASO 1: Elegir dificultad (usa switch):
Pide la dificultad con prompt() (texto exacto en minúsculas: "facil",
"medio" o "dificil"). Según la dificultad, asigna un puntaje base por
pregunta correcta:
    - "facil"   -> 10 puntos base
    - "medio"   -> 20 puntos base
    - "dificil" -> 30 puntos base
    - Cualquier otro valor -> puntaje base 15 (valor por defecto)

PASO 2: Función de cálculo de puntos (OBLIGATORIA):
Define una function expression o arrow function, por ejemplo
calcularPuntos(base, racha), que reciba el puntaje base y la racha
actual del jugador, y devuelva (con return) el puntaje de esa pregunta:
    - Si la racha es mayor o igual a 3, devuelve el puntaje base
    incrementado en un 50% (usa el operador ternario dentro de la
    función para decidir esto).
    - Si no, devuelve el puntaje base sin cambios.  
Esta función debe ser llamada dentro del bucle, una vez por cada
pregunta respondida correctamente.

PASO 3: Bucle de preguntas (usa for, de la pregunta 1 a la 5):
En cada vuelta:
    1. Pregunta con confirm() si el jugador respondió correctamente,
        por ejemplo: confirm("¿Respondió correctamente la pregunta " + i + "?")
        (confirm() devuelve true o false, simula así el resultado real
        de cada pregunta).
    2. Si la respuesta es correcta (true):
        - Aumenta la racha en 1.
        - Llama a calcularPuntos() con el puntaje base y la racha
            actual, y suma el resultado al puntaje total.
    3. Si la respuesta es incorrecta (false):
        - Reinicia la racha a 0.
        - No suma puntos esa pregunta.
    4. Actualiza (si corresponde) la racha máxima alcanzada durante
        toda la partida.

PASO 4: Resultado final:
Al terminar las 5 preguntas, calcula el promedio de puntos por
pregunta (puntaje total dividido entre 5). Usa el operador ternario
para armar un mensaje final: si el puntaje total es mayor o igual a
80, el mensaje es "¡Excelente actuación!"; si no, "Sigue practicando".
Muestra con alert() un resumen que incluya: puntaje total, racha
máxima alcanzada, promedio por pregunta, y el mensaje final.

RESTRICCIONES:
    - Debes usar switch para asignar el puntaje base según dificultad.
    - Debes definir y usar una function expression o arrow function
    para calcular el puntaje de cada pregunta (no es opcional).
    - Debes usar el operador ternario al menos dos veces (una dentro
    de la función, otra para el mensaje final).
    - Debes usar for con límites fijos (1 a 5), no while.
    - Debes usar confirm() para simular el acierto o fallo de cada
    pregunta.
    - No uses arrays ni objetos.
    - No uses template literals; concatena con +.

EJEMPLO DE ENTRADA Y SALIDA:
    Entrada: dificultad = "medio" (base = 20)
    Pregunta 1: correcta   -> racha 1, +20 puntos
    Pregunta 2: correcta   -> racha 2, +20 puntos
    Pregunta 3: correcta   -> racha 3, bono activo, +30 puntos
    Pregunta 4: incorrecta -> racha reiniciada a 0, +0 puntos
    Pregunta 5: correcta   -> racha 1, +20 puntos

    Salida (alert):
    "Resumen de la trivia:
    Puntaje total: 90
    Racha máxima: 3
    Promedio por pregunta: 18
    ¡Excelente actuación!"

PISTAS:
    1. La racha se reinicia apenas hay UN fallo, no acumula "perdón"
        entre preguntas: piensa en una variable que se resetea a 0
        dentro del bloque de "incorrecta".
    2. La racha máxima es distinta de la racha actual: necesitas
        comparar y actualizar una variable separada cada vez que la
        racha actual cambia (mismo patrón que el máximo en la estación
        meteorológica).
    3. La función calcularPuntos debe recibir la racha YA actualizada
        de esa vuelta (después de sumarle 1 si fue correcta), para que
        la condición de la racha >= 3 se evalúe correctamente.
    4. Recuerda: una function expression se ve así:
        const nombre = function(parametros) { ... return valor; };
        y una arrow function así:
        const nombre = (parametros) => { ... return valor; };
        Cualquiera de las dos formas es válida para este ejercicio.
*/