
export enum Casa {
  'DC',
  'Marvel'
}

export interface Hero {
  id: number;
  nombre: string;
  nombreReal: string;
  aliases: string[];
  altura: number;
  popularidad: number;
  valorPrimerComic: number;
  bio: string;
  img: string;
  fechaPrimeraAparicion: string;
  casa: Casa;
  videoUrl: string;
}
