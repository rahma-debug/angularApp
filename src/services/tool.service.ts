import { Outil } from './../modals/Outil';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Outil[]> {
    return this.httpClient
      .get<Outil[]>('http://localhost:9000/OUTIL-SERVICE/outils')
      .toPromise();
  }

  getOutilById(id: string): Promise<Outil> {
    return this.httpClient
      .get<Outil>(`http://localhost:9000/OUTIL-SERVICE/outil/${id}`)
      .toPromise();
  }

  updateOutil(Outil: any): Promise<Outil> {
    console.log(Outil);
    // tslint:disable-next-line:max-line-length
    return this.httpClient
      .put<Outil>(
        `http://localhost:9000/OUTIL-SERVICE/outil/${Outil.id}`,
        Outil
      )
      .toPromise();
  }

  createOutil(Outil: any): Promise<Outil> {
    console.log(Outil);
    return this.httpClient
      .post<Outil>(`http://localhost:9000/OUTIL-SERVICE/outil/add`, Outil)
      .toPromise();
  }
  delete(id: string): Promise<void> {
    return this.httpClient
      .delete<void>(`http://localhost:9000/OUTIL-SERVICE/outil/${id}`)
      .toPromise();
  }
  addAuteurToTool(idauteur: number, idoutil: number): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/outil/addAuteur`,
        { outil_id: idoutil, auteur_id: idauteur }
      )
      .toPromise();
  }

  removeAuteurFromTool(idauteur: number, idoutil: number): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/outil/removeAuteur`,
        { outil_id: idoutil, auteur_id: idauteur }
      )
      .toPromise();
  }
  removeToolParticipants(idOutil: number): Promise<void> {
    return this.httpClient
      .delete<void>(
        `http://localhost:9000/MEMBER-SERVICE/member/outil/delete/${idOutil}`
      )
      .toPromise();
  }
}
