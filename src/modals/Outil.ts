import { Member } from './Member';
export interface Outil {
  id: string;
  date: string;
  source: string;
  organizers:Member[]
}
