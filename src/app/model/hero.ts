
export enum Casa {
  'DC',
  'Marvel'
}

export interface Hero {
  id: number;
  nombre: string;
  aliases: string[];
  altura: number;
  popularidad: number;
  valorPrimerComic: number;
  bio: string;
  img: string;
  aparicion: string;
  casa: Casa;
}
