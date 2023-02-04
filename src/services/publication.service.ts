import { Publication } from './../modals/Pub';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  removePublicationById(id: string): Promise<void> {
    return this.httpClient.delete<void>(`http://localhost:9000/PUBLICATION-SERVICE/publication/${id}`).toPromise();
  }
  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Publication[]> {
    return this.httpClient
      .get<Publication[]>(
        'http://localhost:9000/PUBLICATION-SERVICE/publications'
      )
      .toPromise();
  }

  getPublicationById(id: string): Promise<Publication> {
    return this.httpClient
      .get<Publication>(
        `http://localhost:9000/PUBLICATION-SERVICE/publication/${id}`
      )
      .toPromise();
  }

  updatePublication(Publication: any): Promise<Publication> {
    const param = new HttpParams({
      fromObject: {
        type:Publication.type,
    titre:Publication.titre,
    sourcePdf:Publication.sourcePdf,
    lien:Publication.lien,
    date:Publication.date
      },
    });
    return this.httpClient
      .put<Publication>(
        `http://localhost:9000/PUBLICATION-SERVICE/publication/${Publication.id}`,
        param
      )
      .toPromise();
  }

  createPublication(Publication: any): Promise<Publication> {
    console.log(Publication);
    return this.httpClient
      .post<Publication>(
        `http://localhost:9000/PUBLICATION-SERVICE/publication/add`,
        Publication
      )
      .toPromise();
  }

  delete(id: string): Promise<void> {
    return this.httpClient
      .delete<void>(
        `http://localhost:9000/PUBLICATION-SERVICE/publications/${id}`
      )
      .toPromise();
  }
  addAuteurToPublication(
    idauteur: number,
    idpublication: number
  ): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/publication/addAuteur`,
        { publication_id: idpublication, auteur_id: idauteur }
      )
      .toPromise();
  }

  removeAuteurFromPublication(
    idauteur: number,
    idpublication: number
  ): Promise<void> {
    return this.httpClient
      .post<void>(
        `http://localhost:9000/MEMBER-SERVICE/membres/publication/removeAuteur`,
        { publication_id: idpublication, auteur_id: idauteur }
      )
      .toPromise();
  }
  removePublicationParticipants(idpublication: number): Promise<void> {
    return this.httpClient
      .delete<void>(
        `http://localhost:9000/MEMBER-SERVICE/member/publication/delete/${idpublication}`
      )
      .toPromise();
  }
}
