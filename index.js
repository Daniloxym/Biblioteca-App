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
      nombre: 'Juan Perez',
      email: 'juan.perez@example.com',
      librosPrestados: []
    },
    {
      id: 2,
      nombre: 'Maria Lopez',
      email: 'maria.lopez@example.com',
      librosPrestados: []
    },
    {
      id: 3,
      nombre: 'Carlos García',
      email: 'carlos.garcia@example.com',
      librosPrestados: []
    },
    {
      id: 4,
      nombre: 'Cesar Gutierrez',
      email: 'cesargutierrez@gmail.com',
      librosPrestados: []
    }
  ];

  let opcion;

  do {
    opcion = Number(
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
        prestarLibro(libros, usuarios);
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
        alert('HA CERRADO LA APLICACIÓN EXITOSAMENTE!');
        break;

      default:
        alert('Opcion no valida');
        break;
    }
  } while (opcion !== 9);
}

main();

//Funciones de la aplicación

function mostrarLibros(libros) {
  console.log('MOSTRANDO LIBROS DISPONIBLES EN LA BIBLIOTECA');

  console.table(libros);

  // let stringLibros = '';

  // libros.forEach((libro) => {
  //   stringLibros += `NOMBRE DEL LIBRO: ${libro.titulo}\n
  //                     AUTOR DEL LIBRO: ${libro.autor}\n
  //                     AÑO DE PUBLICACION: ${libro.anio}\n
  //                     GENERO: ${libro.genero}\n
  //                     DISPONIBILIDAD: ${libro.disponible ? 'Si está disponible' : 'No está disponible'} \n\n`;
  // });

  // prompt(stringLibros);
}
function buscarLibro(libros) {
  const titulo = prompt('Digite el nombre del libro que desea buscar:').toLowerCase();

  const libroEncontrado = libros.find(function (libro) {
    return titulo === libro.titulo.toLowerCase();
  });

  if (!libroEncontrado) {
    console.log(`El libro llamado ${titulo} no se encuentra disponible`);
    return;
  }

  console.log(`El libro llamado ${titulo} se encuentra disponible`);
  console.table(libroEncontrado);
}

function registrarUsuario(usuarios) {
  const nombre = prompt('Digite el nombre del usuario:');

  if (!nombre) {
    alert('Debe ingresar un nombre para el usuario');
    return;
  }

  if (nombre.trim() === '') {
    alert('El nombre del usuario no puede estar vacío');
    return;
  }

  if (nombre.length < 3) {
    alert('El nombre del usuario debe tener al menos 3 caracteres');
    return;
  }

  if (nombre.length > 50) {
    alert('El nombre del usuario no debe exceder los 50 caracteres');
    return;
  }

  const email = prompt('Digite el correo electronico del usuario: ');

  const usuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    librosPrestados: 0
  };

  usuarios.push(usuario);

  //Mostrar usuarios

  console.log('USUARIOS REGISTRADOS: ');
  console.log(usuarios);
}
function prestarLibro(libros, usuarios) {
  const usuario = prompt('Digite el nombre del usuario que desea prestar el libro:');

  if (!usuario) {
    alert('Debe ingresar un nombre de usuario');
    return;
  }

  if (usuario.trim() === '') {
    alert('El nombre del usuario no puede estar vacío');
    return;
  }

  if (usuario.length < 3) {
    alert('El nombre del usuario debe tener al menos 3 caracteres');
    return;
  }

  if (usuario.length > 50) {
    alert('El nombre del usuario no debe exceder los 50 caracteres');
    return;
  }

  const usuarioEncontrado = usuarios.find(function (u) {
    return usuario === u.nombre.toLowerCase();
  });

  if (!usuarioEncontrado) {
    console.log(`El usuario llamado ${usuario} no se encuentra registrado`);
    return;
  }

  const titulo = prompt('Digite el nombre del libro que desea buscar:').toLowerCase();

  const libroEncontrado = libros.find(function (libro) {
    return titulo === libro.titulo.toLowerCase();
  });

  if (!libroEncontrado) {
    console.log(`El libro llamado ${titulo} no se encuentra disponible`);
    return;
  }

  usuarioEncontrado.librosPrestados.push(libroEncontrado.titulo);
  libroEncontrado.disponible = false;
}
function devolverLibro(libros) {}
function mostrarLibrosDisponibles(libros) {}
function mostrarLibrosPrestados(libros) {}
function mostrarEstadisticas(libros) {}
