# Práctica: Pull Requests en GitHub

En esta práctica vamos a aprender a colaborar en un repositorio usando:

* Fork
* Clone
* Branch
* Commit
* Push
* Pull Request
* Merge

El repositorio original pertenece al profesor/a.

---

## Objetivo

Cada alumno/a deberá modificar una función marcada con `TODO`.

Cada persona trabajará en una función distinta para evitar conflictos.

---

## Reparto de tareas

| Alumno/a    | Función                      |
| ----------- | ---------------------------- |
| Alumno/a 1  | `obtenerNombreCompleto`      |
| Alumno/a 2  | `esMayorDeEdad`              |
| Alumno/a 3  | `calcularPrecioConDescuento` |
| Alumno/a 4  | `obtenerNumeroMayor`         |
| Alumno/a 5  | `contarPalabras`             |
| Alumno/a 6  | `esPalindromo`               |
| Alumno/a 7  | `celsiusAFahrenheit`         |
| Alumno/a 8  | `filtrarPares`               |
| Alumno/a 9  | `generarSaludo`              |
| Alumno/a 10 | `calcularMedia`              |
| Alumno/a 11 | `validarEmail`               |
| Alumno/a 12 | `capitalizarPalabra`         |

---

## Pasos de la práctica

### 1. Hacer un fork

Entra en este repositorio y pulsa el botón **Fork**.

Esto creará una copia del repositorio en tu cuenta de GitHub.

---

### 2. Clonar tu fork

Copia la URL de tu fork y clónalo en tu equipo:

```bash
git clone URL_DE_TU_FORK
cd practica-pull-requests
```

---

### 3. Crear una rama

Para trabajar correctamente, **no uses la rama main**.

Crea una rama con el nombre de tu tarea:

```bash
git checkout -b tarea-mi-funcion
```

Ejemplo:

```bash
git checkout -b tarea-calcular-media
```

---

### 4. Implementar la funcionalidad

Abre el fichero:

```text
js/funciones.js
```

Busca la función que te ha tocado y completa el `TODO`.

El fichero `js/pruebas.js` solo contiene las pruebas que muestran los resultados en la página. No hace falta modificarlo para completar la práctica.

Importante:

* No modifiques otras funciones
* No cambies nombres de funciones
* No borres código existente

---

### 5. Guardar cambios con un commit

Comprueba los cambios:

```bash
git status
```

Añade los archivos:

```bash
git add .
```

Haz el commit:

```bash
git commit -m "Implementa calcularMedia"
```

---

### 6. Subir la rama a GitHub

```bash
git push origin tarea-mi-funcion
```

---

### 7. Crear el Pull Request

En GitHub aparecerá un botón para crear un **Pull Request**.

Debes crear una solicitud desde tu rama hacia la rama `main` del repositorio del profesor.

Incluye una pequeña descripción:

* Qué función has implementado
* Qué hace
* Ejemplo de uso

Ejemplo:

```text
He implementado la función calcularMedia.

Recibe un array de números y devuelve la media.
Ejemplo: [5, 7, 9] -> 7
```

---

## Cómo comprobar si funciona

Abre el archivo:

```text
index.html
```

En el navegador verás:

* Rojo -> función sin implementar o incorrecta
* Verde -> función correcta

También puedes abrir la consola del navegador para revisar posibles errores.

---

## Normas

* No trabajar directamente en `main`
* No modificar funciones de otros compañeros/as
* Un Pull Request por alumno/a
* El commit debe tener un mensaje claro

---

## Ejemplo de función

```javascript
function generarSaludo(nombre) {
    return "Hola, " + nombre;
}
```
