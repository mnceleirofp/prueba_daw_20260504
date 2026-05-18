// Cada alumno/a debe escoger UNA función, completar el TODO
// y hacer un Pull Request al repositorio del profesor.

// TODO 1: devolver el nombre completo uniendo nombre y apellidos
function obtenerNombreCompleto(nombre, apellidos) {
    // Ejemplo: obtenerNombreCompleto("Ana", "López Pérez") -> "Ana López Pérez"
}

// TODO 2: devolver true si la persona es mayor de edad
function esMayorDeEdad(edad) {
    // Ejemplo: esMayorDeEdad(18) -> true
    if (edad >= 18) {
        return true;
    }else{
        return false;
    }
}

// TODO 3: calcular el precio final aplicando un descuento
function calcularPrecioConDescuento(precio, descuento) {
    // descuento será un porcentaje. Ejemplo: 20 significa 20%
}

// TODO 4: devolver el número más grande de un array
function obtenerNumeroMayor(numeros) {
    // Ejemplo: obtenerNumeroMayor([4, 10, 2]) -> 10
        $mayor=numeros[0];
    for($i=0;$i<numeros.length+1;$i++){
        if(numeros[$i]>$mayor){
            $mayor=numeros[$i];
        }
    }

    return $mayor;
}

// TODO 5: contar cuántas palabras tiene un texto
function contarPalabras(texto) {
    // Ejemplo: contarPalabras("Hola mundo") -> 2
}

// TODO 6: devolver true si una palabra es un palíndromo
function esPalindromo(palabra) {
    // 1. Convertimos la palabra a minúsculas para evitar problemas con mayúsculas (ej: "Oso")
    const palabraMinuscula = palabra.toLowerCase();
    
    // 2. Separamos la palabra en letras, le damos la vuelta y la volvemos a unir
    const palabraAlReves = palabraMinuscula.split('').reverse().join('');
    
    // 3. Devolvemos si son exactamente iguales (true o false)
    return palabraMinuscula === palabraAlReves;
}

// TODO 7: convertir grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    // Fórmula: F = C * 9 / 5 + 32
}

// TODO 8: devolver una lista solo con los números pares
function filtrarPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { 
            pares.push(numeros[i]); 
        }     
    }
    return pares;
    // Ejemplo: filtrarPares([1, 2, 3, 4]) -> [2, 4]
}

// TODO 9: generar un saludo personalizado
function generarSaludo(nombre) {
    // Ejemplo: generarSaludo("Lucía") -> "Hola, Lucía"
}

// TODO 10: calcular la media de una lista de notas
function calcularMedia(notas) {
    // Ejemplo: calcularMedia([5, 7, 9]) -> 7
}

// TODO 11: devolver true si un email parece válido
function validarEmail(email) {
    // Debe comprobar que contiene @ y .
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// TODO 12: capitalizar la primera letra de una palabra
function capitalizarPalabra(palabra) {
    // Ejemplo: capitalizarPalabra("java") -> "Java"
}
