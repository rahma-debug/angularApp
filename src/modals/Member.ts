import { Event } from './Event';
import { Outil } from './Outil';
import { Publication } from "./Pub";


export interface Member {
    id: string;
    cin: string;
    nom: string;
    prenom: string;
    date: string;
    photo: any;
    cv: string;
    email: string;
    password: string;
    type:string;
    pubs: Publication[];
    events: Event[];
    tools: Outil[];
    encadrant: Member;
    diplome: string;
    grade: string;
    dateInscription: string;
    etablissement: string;
  }
  
