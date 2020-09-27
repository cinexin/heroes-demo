import {Injectable} from '@angular/core';
import {Casa, Hero} from '../model/hero';

@Injectable()
export class HeroesService {


  private heroes: Hero[] = [
    {
      id: 0,
      nombre: 'Aquaman',
      aliases: ['Rey de los Siete Mares', ' Habitante de las Profundidades', 'As Acuático', 'Marino Maravilla'],
      altura: 1.93,
      popularidad: 0.7632,
      valorPrimerComic: 1000.34,
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      fechaPrimeraAparicion: '1941-11-01',
      casa: Casa.DC
    },
    {
      id: 1,
      nombre: 'Batman',
      aliases: ['Murciélago', 'Matches Malone', 'El caballero de la noche', 'El caballero oscuro', 'Zurdo Knox3'],
      altura: 1.88,
      popularidad: 0.9678,
      valorPrimerComic: 850000.00,
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      fechaPrimeraAparicion: '1939-05-01',
      casa: Casa.DC
    },
    {
      id: 2,
      nombre: 'Daredevil',
      altura: 1.80,
      popularidad: 0.6523,
      valorPrimerComic: 198000.00,
      aliases: ['Dan Defensor', 'Diablo Defensor', 'El Hombre sin Miedo', 'El Abogado de la Cocina del Infierno', 'Diabólico', ' Diablo Guardián', 'Doble D', 'El Demonio de la Cocina del Infierno'],
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      fechaPrimeraAparicion: '1964-01-01',
      casa: Casa.Marvel
    },
    {
      id: 3,
      nombre: 'Hulk',
      altura: 1.78,
      popularidad: 0.8532,
      valorPrimerComic: 300000.00,
      aliases: ['El coloso de Jade', 'Incredible Hulk', 'El Hombre Increíble', 'Joe Fixit', 'El Profesor', 'El Gigante Verde', 'El Coloso de Jade', 'El Destructor de Mundos', 'El Gigante Esmeralda'],
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      fechaPrimeraAparicion: '1962-05-01',
      casa: Casa.Marvel
    },
    {
      id: 4,
      nombre: 'Linterna Verde',
      altura: 1.82,
      popularidad: 0.556,
      valorPrimerComic: 750000.00,
      aliases: ['Alan Scott'],
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      fechaPrimeraAparicion: '1940-06-01',
      casa: Casa.DC
    },
    {
      id: 5,
      nombre: 'Spider-Man',
      altura: 1.78,
      popularidad: 1.0,
      valorPrimerComic: 110000.00,
      aliases: ['Arañita', 	'El Trepamuros', 'Spidey', 'Arácnido', 'Su Amigo y Vecino Spider-Man', 'El Asombroso Spider-Man', 'Araña de Hierro', 'Ricochet', 'Dusk', 'Prodigio', 'Avispón', 'Ben Reilly', 'Araña Escarlata', 'Capitán Universo', 'Mentiroso'],
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      fechaPrimeraAparicion: '1962-08-01',
      casa: Casa.Marvel
    },
    {
      id: 6,
      nombre: 'Wolverine',
      popularidad: 0.6560,
      altura: 1.6012,
      valorPrimerComic: 210000.00,
      aliases: ['Lobito', 'Logan', 'Patch', 'Arma X'],
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      fechaPrimeraAparicion: '1974-11-01',
      casa: Casa.Marvel
    }
  ];

  constructor() {
    console.log('Heroes Service ready');
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return (this.heroes.filter(hero => hero.id === id))[0] ?? this.getHero(0);
  }

  searchHero(searchTerm: string): Hero[] {
    searchTerm = searchTerm.toLowerCase();
    return this.getHeroes().filter(heroe => heroe.nombre.toLowerCase().includes(searchTerm));
  }
}
