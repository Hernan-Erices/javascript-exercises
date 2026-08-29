/*

EJERCICIO 3: Calculadora de costo de envío

DIFICULTAD: (2/5)

OBJETIVO:

Combinar switch (para decisiones por categoría) con if/else (para rangos numéricos) y un operador lógico (&&) 
para una condición especial. Es un paso más complejo que el ejercicio del método de pago porque ahora dos sistemas
de decisión distintos trabajan juntos sobre el mismo resultado.

ENUNCIADO:

Una tienda online calcula el costo de envío de un paquete según dos factores: la región de destino y el peso del paquete.

PASO 1: Costo base según región (usa switch):

Región (texto exacto)	Costo base
"norte"	                $3000
"centro"	            $2000
"sur"	                $3500
Cualquier otro valor	Región no válida

Si la región no es válida, el programa debe mostrar "Región no válida" con alert() y no debe continuar calculando el peso.

PASO 2: Recargo por peso (usa if/else if/else), solo si la región fue válida:

Peso (kg)	                        Recargo adicional
Hasta 5 kg (inclusive)	            +$0
Más de 5 y hasta 15 kg (inclusive)	+$1000
Más de 15 kg	                    +$2500

PASO 3: Regla especial de envío gratis:
Si la región es "centro" Y el peso es menor o igual a 2 kg, el envío es totalmente gratis ($0), sin importar el 
resultado de los pasos anteriores. Esta condición debe evaluarse combinando ambas variables con el operador &&.

TU SCRIPT DEBE:

    1.Pedir la región con prompt() (el usuario escribirá el texto exacto, en minúsculas).
    
    2. Pedir el peso con prompt() y convertirlo a número.
    
    3. Calcular el costo total aplicando las reglas anteriores.
    
    4. Mostrar el resultado final con alert().

RESTRICIONES:

    1. Debes usar switch para decidir el costo base por región.

    2. Debes usar if / else if / else para el recargo por peso.
    
    3. Debes usar el operador lógico && para la condición de envío gratis.
    
    4. No uses arrays, objetos ni métodos de strings (como toLowerCase()) — asume que el usuario escribe la región en minúsculas exactas.
    
    5. No uses template literals; concatena con +.
    
    6. El uso de funciones es opcional (no obligatorio, pero si quieres ordenar mejor tu código, puedes usarlas).

EJEMPLO DE ENTRADA Y SALIDA:

ENTRADA: región = "norte", peso = 10
SALIDA (alert): "El costo de tu envío es: $4000"

ENTRADA: región = "centro", peso = 1.5
SALIDA (alert): "¡Envío gratis! Tu paquete califica por peso reducido."

ENTRADA: región = "sur", peso = 3
SALIDA (alert): "El costo de tu envío es: $3500"

ENTRADA: región = "este", peso = 5
SALIDA (alert): "Región no válida"


PISTAS (SOLO SI TE TRABAS):

    1. Piensa en el orden de tus verificaciones: ¿conviene revisar primero si la región es válida, o primero 
    calcular todo y validar al final? El enunciado te pide cortar la ejecución si la región no es válida — 
    piensa cómo lograr eso con lo que sabes (sin return de función, puedes anidar el resto de la lógica 
    dentro del mismo case, o usar una variable de control).
    
    2. El switch puede usarse para asignar el costo base a una variable, en lugar de mostrar el alert directamente
    dentro de cada case.
    
    3. Para la condición de envío gratis, recuerda que && solo es verdadero si ambas condiciones lo son.
    
    4. Ojo con el tipo de dato: prompt() para el peso devuelve un string, conviértelo antes de comparar con números.
*/

let region = prompt("Ingresa la region:")

switch(region) {
    
    case "norte":
        costoBase = 3000;
        break;

    case "centro":
        costoBase = 2000;
        break;

    case "sur":
        costoBase = 3500;
        break;

    case "Cualquier otro valor":
        costoBase = "Región no válida";
        break;

}

if(region = "norte" || "centro" || "sur"){

    let peso = Number(prompt("dime el peso: "));

    if (peso > 15) {

        recargoAdicional = 2500;

    } else if (5 < peso > 15){

        recargoAdicional = 1000;

    } else if (peso < 5) {

        recargoAdicional = 0;

    } else if(region = "centro" && peso < 2){

        envio_gratis = 0;
    }

    let valor_de_envio_final = costoBase + recargoAdicional;

    alert("El costo de tu envío final es: " + "$" + valor_de_envio_final);

} else {
    alert("debes selecionar una region valida");
}
