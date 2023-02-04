import { Member } from 'src/modals/Member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/modals/Event';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Event[]> {
    return this.httpClient
      .get<Event[]>('http://localhost:9000/EVENEMENT-SERVICE/evenements')
      .toPromise();
  }

  getEventById(id: string): Promise<Event> {
    return this.httpClient
      .get<Event>(`http://localhost:9000/EVENEMENT-SERVICE/evenement/${id}`)
      .toPromise();
  }

  updateEvent(event: any): Promise<Event> {
    return this.httpClient
      .put<Event>(
        `http://localhost:9000/EVENEMENT-SERVICE/evenement/${event.id}`,
        {
          "titre":event.titre,
          "date":event.date,
          "lieu":event.lieu
        }
      )
      .toPromise();
  }

  createEvent(event: any): Promise<Event> {
    return this.httpClient
      .post<Event>(
        `http://localhost:9000/EVENEMENT-SERVICE/evenement/add`,
        event
      )
      .toPromise();
  }

  delete(id: string): Promise<void> {
    return this.httpClient
      .delete<void>(`http://localhost:9000/EVENEMENT-SERVICE/evenement/${id}`)
      .toPromise();
  }
  getEventsMembers(id: string): Promise<Member[]> {
    return this.httpClient
      .get<Member[]>(`http://localhost:9000/MEMBER-SERVICE/membres/event/${id}`)
      .toPromise();
  }
  addParticipantToEvent(idparticipant: number, idevent: number): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/event/addParticipant`,
        { evenement_id: idevent, auteur_id: idparticipant }
      )
      .toPromise();
  }

  removeParticipantFromEvent(
    idparticipant: number,
    idevent: number
  ): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/event/removeParticipant`,
        { evenement_id: idevent, organisateur_id: idparticipant }
      )
      .toPromise();
  }
  removeEventParticipants(idevent: number): Promise<void> {
    return this.httpClient
      .delete<void>(
        `http://localhost:9000/MEMBER-SERVICE/member/event/delete/${idevent}`
      )
      .toPromise();
  }
}
