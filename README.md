# Biblioteca App

Aplicación web sencilla en JavaScript que simula la gestión básica de una biblioteca desde el navegador usando `prompt`, `alert` y la consola.

## Estado actual del proyecto

El proyecto se encuentra en una fase inicial. Actualmente incluye:

- Un catálogo de libros cargado en memoria
- Un listado de usuarios cargado en memoria
- Un menú principal interactivo mostrado con `prompt`
- Consulta completa del catálogo
- Búsqueda de libros por título

Funciones previstas pero todavía sin implementar:

- Registro de usuarios
- Préstamo de libros
- Devolución de libros
- Listado de libros disponibles
- Listado de libros prestados
- Estadísticas de la biblioteca

## Estructura del proyecto

```text
.
├── index.html
└── index.js
```

### `index.html`

Archivo base que carga la aplicación en el navegador.

### `index.js`

Contiene:

- Los datos iniciales de libros y usuarios
- La función `main()` con el menú principal
- La lógica actual de consulta y búsqueda
- Las funciones pendientes para futuras mejoras

## Cómo ejecutar el proyecto

Como no necesita dependencias ni servidor, basta con abrir el archivo HTML en un navegador:

1. Descarga o clona este repositorio
2. Abre `/home/runner/work/Biblioteca-App/Biblioteca-App/index.html` en tu navegador
3. Interactúa con el menú emergente
4. Revisa la consola del navegador para ver los resultados

## Cómo usar la aplicación

Al iniciarse, la app muestra este menú:

1. Mostrar libros
2. Buscar libro
3. Registrar usuario
4. Prestar libro
5. Devolver libro
6. Mostrar libros disponibles
7. Mostrar libros prestados
8. Estadísticas
9. Salir

### Opciones que ya funcionan

#### 1. Mostrar libros

Muestra el catálogo completo en formato tabla mediante `console.table()`.

#### 2. Buscar libro

Permite escribir el título de un libro y comprobar si existe en el catálogo cargado.

## Datos actuales del sistema

La aplicación arranca con:

- 11 libros precargados
- 4 usuarios precargados

Toda la información vive en memoria, por lo que no se guarda al recargar la página.

## Tecnologías utilizadas

- HTML5
- JavaScript vanilla
- APIs básicas del navegador (`prompt`, `alert`, `console`)

## Limitaciones actuales

- No existe persistencia de datos
- No hay interfaz visual más allá de los diálogos del navegador
- Varias opciones del menú todavía son placeholders
- La lógica depende de la consola del navegador para mostrar resultados

## Próximos pasos recomendados

- Implementar las funciones pendientes del menú
- Conectar libros y usuarios en la lógica de préstamos
- Validar mejor la entrada del usuario
- Añadir una interfaz gráfica en el DOM
- Incorporar almacenamiento local o backend para persistencia

