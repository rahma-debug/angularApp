
import { Enseignant } from './Enseignant';
import { Outil } from './Outil';
import { Publication } from './Pub';

export class Etudiant  {
    id!: string;
    cin!: string;
    nom!: string;
    prenom!: string;
    date!: string;
    photo!: any;
    cv!: string;
    email!: string;
    password!: string;
    pubs!: Publication[];
    events!: Event[];
    tools!: Outil[];
    encadrant!: Enseignant;
    diplome!: string;
    dateInscription!: string;
  }