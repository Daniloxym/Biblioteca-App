function main() {
  const libros = [
    {
      id: 1,
      titulo: 'El Quijote',
      autor: 'Miguel de Cervantes',
      anio: 1605,
      genero: 'Novela',
      disponible: true
    },
    {
      id: 2,
      titulo: 'Cien Años de Soledad',
      autor: 'Gabriel García Márquez',
      anio: 1967,
      genero: 'Novela',
      disponible: true
    },
    {
      id: 3,
      titulo: 'La Sombra del Viento',
      autor: 'Carlos Ruiz Zafón',
      anio: 2001,
      genero: 'Novela',
      disponible: true
    },

    {
      id: 4,
      titulo: 'Don Juan Tenorio',
      autor: 'José Zorrilla',
      anio: 1844,
      genero: 'Teatro',
      disponible: true
    },
    {
      id: 5,
      titulo: 'La Casa de Bernarda Alba',
      autor: 'Federico García Lorca',
      anio: 1936,
      genero: 'Teatro',
      disponible: true
    },
    {
      id: 6,
      titulo: 'Ficciones',
      autor: 'Jorge Luis Borges',
      anio: 1944,
      genero: 'Cuento',
      disponible: true
    },
    {
      id: 7,
      titulo: 'El Aleph',
      autor: 'Jorge Luis Borges',
      anio: 1949,
      genero: 'Cuento',
      disponible: true
    },
    {
      id: 8,
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      anio: 1963,
      genero: 'Novela',
      disponible: true
    },
    {
      id: 9,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      anio: 1943,
      genero: 'Novela',
      disponible: true
    },
    {
      id: 10,
      titulo: 'La Metamorfosis',
      autor: 'Franz Kafka',
      anio: 1915,
      genero: 'Novela',
      disponible: true
    },
    {
      id: 11,
      titulo: 'El Bosque de los susurros',
      autor: 'Juan Oscar',
      anio: 1933,
      genero: 'Ficcion',
      disponible: true
    }
  ];

  const usuarios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      librosPrestados: 2
    },
    {
      id: 2,
      nombre: 'María López',
      email: 'maria.lopez@example.com',
      librosPrestados: 1
    },
    {
      id: 3,
      nombre: 'Carlos García',
      email: 'carlos.garcia@example.com',
      librosPrestados: 0
    },
    {
      id: 4,
      nombre: 'Cesar Guitierrez',
      email: 'CesarGuitierrez@gmail.com',
      librosPrestados: 5
    }
  ];
  let opcion = Number(
    prompt(
      `===== BIBLIOTECA =====\n1. Mostrar libros\n2. Buscar libro\n3. Registrar usuario\n4. Prestar libro\n5. Devolver libro\n6. Mostrar libros disponibles\n7. Mostrar libros prestados\n8. Estadísticas\n9. Salir`
    )
  );

  if (!Number.isFinite(opcion)) {
    alert('Debe ingresar una opción valida!');
    return;
  }

  switch (opcion) {
    case 1:
      mostrarLibros(libros);
      break;

    case 2:
      buscarLibro(libros);
      break;

    case 3:
      registrarUsuario(usuarios);
      break;

    case 4:
      prestarLibro(libros);
      break;

    case 5:
      devolverLibro(libros);
      break;

    case 6:
      mostrarLibrosDisponibles(libros);
      break;

    case 7:
      mostrarLibrosPrestados(libros);
      break;
    case 8:
      mostrarEstadisticas(libros);
      break;

    case 9:
      return;

    default:
      alert('Opcion no valida');
      break;
  }
}

main();

//Funciones de la aplicación

function mostrarLibros(libros) {
  console.log('MOSTRANDO LIBROS DISPONIBLES EN LA BIBLIOTECA');

  console.table(libros);
}
function buscarLibro(libros) {
  const titulo = prompt('Digite el nombre del libro que desea buscar:').toLowerCase();

  const libroEncontrado = libros.find(function (libro) {
    return titulo === libro.titulo.toLowerCase();
  });

  if (!libroEncontrado) {
    console.log('El libro no está disponible');
    return;
  }

  console.log(`El libro llamado ${titulo} se encuentra disponible`);
  console.log(libroEncontrado);
}
function registrarUsuario(usuarios) {}
function prestarLibro(libros) {}
function devolverLibro(libros) {}
function mostrarLibrosDisponibles(libros) {}
function mostrarLibrosPrestados(libros) {}
function mostrarEstadisticas(libros) {}
