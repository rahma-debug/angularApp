import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/modals/Member';
import { global } from 'src/app/app_config';
//injecter le service dans le composant:injection de dependance
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  //creation de tab
  public tab: Member[] = global._db.Members;
  constructor(private httpClient: HttpClient) {}
  // pour envoyer une rq http a fin d'ajouter une ligne ds le tab
  saveMember(memberToSave: Member): Promise<void> {
    //promise :plus rapide,observable:thread
    // return this.httpClient.post<Member>('linkToRestApi',memberToSave).toPromise();
    const objectToInsert = {
      ...memberToSave,
      id: memberToSave.id ?? Math.ceil(Math.random() * 1000).toString(),
      createdDate: memberToSave.createdDate ?? new Date().toISOString(),
    };
    this.tab = [
      objectToInsert,
      ...this.tab.filter((elt) => elt.id != objectToInsert.id),
    ];
    return new Promise((resolve) => resolve());
  }
  getMemberById(cuurrentId: any): Promise<Member> {
    // return this.httpClient.get<Member>('linkToRestApi').toPromise();
    return new Promise((resolve) =>
      resolve(this.tab.filter((elt) => elt.id === cuurrentId)[0] ?? null)
    );
  }
  delete(id: string): Promise<void> {
    //return this.httpClient.delete<void>('linkToRestApi').toPromise()
   this.tab= this.tab.filter((elt) => elt.id != id);
    return new Promise((resolve) => resolve());
  }
  getAll(): Promise<Member[]> {
    //return this.httpClient.get<Member[]>('linkToRestApi').toPromise()
    return new Promise((resolve) => resolve(this.tab));
  }
}
