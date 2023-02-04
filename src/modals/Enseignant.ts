import { Outil } from './Outil';


export class Enseignant {
  tools!: Outil[];
  id!: string;
  cin: string | undefined;
  nom: string | undefined;
  prenom: string| undefined;
  date: string| undefined;
  photo: any;
  cv: string| undefined;
  email: string| undefined;
  password: string| undefined;
  grade: string| undefined;
  etablissement: string| undefined;
}
