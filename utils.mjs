// Importar el módulo 'fs' de manera compatible con ES Modules
import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe {
  constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

// Función para leer y ordenar los superhéroes
export function leerSuperheroes(ruta) {
  const datos = fs.readFileSync(ruta, 'utf8');
  const superheroesArray = JSON.parse(datos);

  // Convertir a instancias de Superheroe
  const superheroes = superheroesArray.map(
    hero => new Superheroe(
      hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, 
      hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, 
      hero.enemigo
    )
  );

  // Ordenar por nombre de superhéroe
  superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
  return superheroes;
}

// Nueva función para agregar superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
  const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
  const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

  const superheroesOriginales = JSON.parse(datosOriginales);
  const nuevosSuperheroes = JSON.parse(datosNuevos);

  // Convertir los nuevos superhéroes a instancias de Superheroe
  const instanciasNuevos = nuevosSuperheroes.map(
    hero => new Superheroe(
      hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, 
      hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, 
      hero.aliado, hero.enemigo
    )
  );

  // Combinar listas
  const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

  // Guardar la lista actualizada
  fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');

  console.log('Lista de superhéroes actualizada con éxito.');
}


/*

// Hacer listaSuperheroes para iniciar el proceso de filtrado y ordenamiento
let listaSuperheroes = [
  new Superheroe(1, 'Spiderman', 'Peter Parker', 'Vigilante', 25, 'Tierra', 'Radioactiva', ['Trepar paredes', 'Sentido arácnido'], 'Redes de telaraña', ['Ironman'], ['Duende Verde']),
  new Superheroe(2, 'Ironman', 'Tony Stark', 'Vigilante', 45, 'Tierra', 'Dependiente de la tecnología', ['Armadura blindada', 'Volar', 'Lásers'], 'Ingeniería avanzada', ['Spiderman'], ['Mandarín']),
  // Otros superhéroes...
  new Superheroe(4, 'Black Widow', 'Natasha Romanoff', 'Vigilante', 35, 'Tierra', 'Ninguna conocida', ['Tácticas de combate', 'Espionaje'], 'Entrenamiento de élite', ['Hawkeye'], [])
  // Aquí repite y crea más superhéroes
];

// Función para eliminar duplicados
const eliminarDuplicados = (superheroes) => {
  const idsUnicos = new Set();
  return superheroes.filter(superheroe => {
    if (!idsUnicos.has(superheroe.id)) {
      idsUnicos.add(superheroe.id);
      return true;
    }
    return false;
  });
};

// Función para ordenar los superhéroes (puedes ordenar por el campo que prefieras)
const ordenarSuperheroes = (superheroes) => {
  return superheroes.sort((a, b) => a.id - b.id);
};  */