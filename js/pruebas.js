const pruebas = [
    {
        titulo: "Nombre completo",
        funcion: "obtenerNombreCompleto",
        resultado: () => obtenerNombreCompleto("Ana", "López Pérez"),
        esperado: "Ana López Pérez"
    },
    {
        titulo: "Mayor de edad",
        funcion: "esMayorDeEdad",
        resultado: () => esMayorDeEdad(18),
        esperado: true
    },
    {
        titulo: "Precio con descuento",
        funcion: "calcularPrecioConDescuento",
        resultado: () => calcularPrecioConDescuento(100, 20),
        esperado: 80
    },
    {
        titulo: "Número mayor",
        funcion: "obtenerNumeroMayor",
        resultado: () => obtenerNumeroMayor([4, 10, 2]),
        esperado: 10
    },
    {
        titulo: "Contar palabras",
        funcion: "contarPalabras",
        resultado: () => contarPalabras("Hola mundo desde JavaScript"),
        esperado: 4
    },
    {
        titulo: "Palíndromo",
        funcion: "esPalindromo",
        resultado: () => esPalindromo("oso"),
        esperado: true
    },
    {
        titulo: "Celsius a Fahrenheit",
        funcion: "celsiusAFahrenheit",
        resultado: () => celsiusAFahrenheit(0),
        esperado: 32
    },
    {
        titulo: "Filtrar pares",
        funcion: "filtrarPares",
        resultado: () => filtrarPares([1, 2, 3, 4, 5, 6]),
        esperado: [2, 4, 6]
    },
    {
        titulo: "Saludo",
        funcion: "generarSaludo",
        resultado: () => generarSaludo("Lucía"),
        esperado: "Hola, Lucía"
    },
    {
        titulo: "Calcular media",
        funcion: "calcularMedia",
        resultado: () => calcularMedia([5, 7, 9]),
        esperado: 7
    },
    {
        titulo: "Validar email",
        funcion: "validarEmail",
        resultado: () => validarEmail("persona@correo.com"),
        esperado: true
    },
    {
        titulo: "Capitalizar palabra",
        funcion: "capitalizarPalabra",
        resultado: () => capitalizarPalabra("java"),
        esperado: "Java"
    }
];

function sonIguales(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function formatearValor(valor) {
    if (valor === undefined) {
        return "undefined";
    }

    return JSON.stringify(valor);
}

function crearParrafoResultado(etiqueta, valor) {
    const parrafo = document.createElement("p");
    parrafo.className = "mb-1";

    const etiquetaElemento = document.createElement("strong");
    etiquetaElemento.textContent = `${etiqueta}: `;

    const codigo = document.createElement("code");
    codigo.textContent = formatearValor(valor);

    parrafo.append(etiquetaElemento, codigo);
    return parrafo;
}

function crearTarjetaResultado(prueba, resultado, correcto) {
    const columna = document.createElement("article");
    columna.className = "col-12 col-md-6 col-lg-4";

    const tarjeta = document.createElement("div");
    tarjeta.className = `card h-100 ${correcto ? "border-success" : "border-danger"}`;

    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

    const titulo = document.createElement("h3");
    titulo.className = "h5 card-title";
    titulo.textContent = prueba.titulo;

    const funcion = crearParrafoResultado("Función", prueba.funcion);
    const resultadoElemento = crearParrafoResultado("Resultado", resultado);
    const esperado = crearParrafoResultado("Esperado", prueba.esperado);
    esperado.classList.add("mb-3");

    const estado = document.createElement("span");
    estado.className = `badge ${correcto ? "text-bg-success" : "text-bg-danger"}`;
    estado.textContent = correcto ? "Correcto" : "Pendiente o incorrecto";

    cuerpo.append(titulo, funcion, resultadoElemento, esperado, estado);
    tarjeta.append(cuerpo);
    columna.append(tarjeta);

    return columna;
}

function ejecutarPrueba(prueba) {
    let resultado;
    let correcto = false;

    try {
        resultado = prueba.resultado();
        correcto = sonIguales(resultado, prueba.esperado);
    } catch (error) {
        resultado = `Error: ${error.message}`;
    }

    return {
        correcto,
        tarjeta: crearTarjetaResultado(prueba, resultado, correcto)
    };
}

function mostrarPruebas() {
    const contenedor = document.getElementById("resultados");
    const resumen = document.getElementById("resumen");

    const resultados = pruebas.map(ejecutarPrueba);
    const totalCorrectas = resultados.filter((resultado) => resultado.correcto).length;

    contenedor.replaceChildren(...resultados.map((resultado) => resultado.tarjeta));
    resumen.textContent = `${totalCorrectas} de ${pruebas.length} pruebas correctas.`;
}

mostrarPruebas();
