/*
EJERCICIO 4: Membresía de gimnasio con validación de entrada

DIFICULTAD: (2/5)

OBJETVIO:

Combinar un bucle while para validar la entrada del usuario, switch para asignar un valor según categoría, 
y if/else con el operador lógico || para aplicar un descuento. Es distinto al ejercicio 3 porque aquí el 
while controla que el usuario no pueda avanzar hasta ingresar un dato válido (en el ejercicio 3 simplemente
cortabas la ejecución si era inválido).

ENUNCIADO:

Un gimnasio quiere un programa para calcular el costo mensual de una membresía.

PASO 1: Validar el plan con un bucle while:

Los planes válidos son (texto exacto, en minúsculas):

"basico"
"premium"
"vip"

Usa un bucle while que siga pidiendo el plan con prompt() mientras el valor ingresado no sea ninguno de los 
tres planes válidos. El bucle debe repetirse tantas veces como sea necesario hasta que el usuario ingrese un plan correcto.

PASO 2: Asignar el precio base según el plan (usa switch):

Plan	    Precio base
"basico"	$15000
"premium"	$25000
"vip"	    $40000

PASO 3: Aplicar descuento por edad (usa if/else con \|\|):

Pide la edad con prompt() y conviértela a número.

Si la edad es menor a 18 \|\| mayor o igual a 60, aplica un 20% de descuento sobre el precio base.
En cualquier otro caso, no hay descuento.

PASO 4: Mostrar resultado:

Muestra con alert() el plan elegido y el precio final (ya con el descuento aplicado si corresponde).

RESTRICIONES:

    1. Debes usar un while para validar el plan (no if, no funciones recursivas — aún no las conoces).
    
    2. Debes usar switch para asignar el precio base.
    
    3. Debes usar if/else combinado con || para el descuento.
    
    4. No uses arrays ni objetos (compara el string ingresado directamente con === contra cada plan válido).
    
    5. No uses template literals; concatena con +.
    
    6. El uso de funciones es opcional.

EJEMPLO DE ENTRADA Y SALIDA:

Entrada: plan = "xyz" (inválido, el programa vuelve a preguntar)
Entrada: plan = "vip"
Entrada: edad = 65
Salida (alert): "Tu membresía vip cuesta: $32000"

Entrada: plan = "basico"
Entrada: edad = 30
Salida (alert): "Tu membresía basico cuesta: $15000"

Entrada: plan = "premium"
Entrada: edad = 16
Salida (alert): "Tu membresía premium cuesta: $20000"


PISTAS (SOLO SI TE TRABAS):

    1. La condición del while debe ser verdadera mientras el dato sea inválido. Piensa: "sigue preguntando
    mientras NO sea 'basico' Y NO sea 'premium' Y NO sea 'vip'" — ¿qué operador lógico conecta esas tres negaciones?
    
    2. Recuerda que dentro del bucle debes volver a pedir el prompt() y reasignar la variable, o el bucle
    se ejecutará para siempre (bucle infinito).
    
    3. Para el descuento, calcular el 20% de un número es lo mismo que multiplicarlo por 0.8 (o restarle el 20%).
    Ambas formas son válidas.
    
    4. El switch puede ir después del while, ya que en ese punto tienes la garantía de que el plan es válido.

*/