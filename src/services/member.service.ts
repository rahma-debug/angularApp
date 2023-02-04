import { Etudiant } from './../modals/Etudiant';
import { Enseignant } from './../modals/Enseignant';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/modals/Member';

//injecter le service dans le composant:injection de dependance
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<Member[]> {
    return this.http
      .get<Member[]>('http://localhost:9000/MEMBER-SERVICE/membres')
      .toPromise();
  }
  loadMembers(): Promise<Member[]> {
    let promise = new Promise<any>((resolve, reject) => {
      let url = environment.url + 'MEMBER-SERVICE/membres';
      this.http
        .get(url)
        .toPromise()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  deleteMember(id: string): Promise<void> {
    return this.http
      .delete<void>(`http://localhost:9000/MEMBER-SERVICE/membre/${id}`)
      .toPromise();
  }

  getMemberById(cuurrentId: any): Promise<Member> {
    return this.http
      .get<Member>('http://localhost:9000/MEMBER-SERVICE/membre/' + cuurrentId)
      .toPromise();
  }
  getDetailsMemberById(cuurrentId: any): Promise<Member> {
    return this.http
      .get<Member>(
        'http://localhost:9000/MEMBER-SERVICE/fullmember/' + cuurrentId
      )
      .toPromise();
  }

  createEtudiant(memberToSave: Member): Promise<Member> {
    return this.http
      .post<Member>(
        'http://localhost:9000/MEMBER-SERVICE/membres/etudiant/add',
        memberToSave
      )
      .toPromise();
  }
  createEns(memberToSave: any): Promise<Member> {
    return this.http
      .post<Member>(
        'http://localhost:9000/MEMBER-SERVICE/membres/enseignant/add',
        memberToSave
      )
      .toPromise();
  }
  getAllTeachers(): Promise<Enseignant[]> {
    return this.http
      .get<Enseignant[]>('http://localhost:9000/MEMBER-SERVICE/enseignants')
      .toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }
  getAllStudents(): Promise<Etudiant[]> {
    return this.http
      .get<Etudiant[]>('http://localhost:9000/MEMBER-SERVICE/etudiants')
      .toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }

  deleteTest(id: string): Promise<void> {
    return this.http
      .delete<void>(`http://localhost:9000/MEMBER-SERVICE/membre/${id}`)
      .toPromise();
  }
  update(member: any): Promise<Member> {
    return this.http
      .post<Member>(`http://localhost:9000/MEMBER-SERVICE/etudiant/add`, member)
      .toPromise();
  }
  updateEtd(member: any): Promise<Member> {
    return this.http
      .post<Member>(`http://localhost:9000/MEMBER-SERVICE/membres/enseignant/edit`, member)
      .toPromise();
  }
  updateEns(member: any): Promise<Member> {
    return this.http
      .post<Member>(`http://localhost:9000/MEMBER-SERVICE/membres/etudiant/edit`, member)
      .toPromise();
  }
  getStudentById(id: string): Promise<Etudiant> {
    return this.http
      .get<Etudiant>('http://localhost:9000/MEMBER-SERVICE/membre/' + id)
      .toPromise();
  }
  getTeacherById(id: string): Promise<Enseignant> {
    return this.http
      .get<Enseignant>('http://localhost:9000/MEMBER-SERVICE/membre/' + id)
      .toPromise();
  }
  affecterTeacherToStudent(idEtd: string, idEns: string): Promise<Member> {
    const param = new HttpParams({
      fromObject: { idetd: idEtd, idens: idEns },
    });
    return this.http
      .put<Member>(
        'http://localhost:9000/MEMBER-SERVICE/memberes/etudiant',
        param
      )
      .toPromise();
  }

  removeMemberById(id: string): Promise<void> {
    return this.http
      .delete<void>(`http://localhost:9000/MEMBER-SERVICE/membres/${id}`, 
      )
      .toPromise();
  }

  getStudentsbyEncadrant(enseignant: Enseignant): Promise<Etudiant[]> {
    return this.http
      .post<Etudiant[]>(
        `http://localhost:9000/MEMBER-SERVICE/students/teacher`,
        enseignant
      )
      .toPromise();
  }
  updateEtudiant(id: string, etudiant: Member): Promise<Member> {
    return this.http
      .put<Member>(
        `http://localhost:9000/MEMBER-SERVICE/membres/etudiant/${id}`,
        etudiant
      )
      .toPromise();
  }
  updateTeacher(id: string, enseignant: Member): Promise<Member> {
    // tslint:disable-next-line:max-line-length
    return this.http
      .put<Member>(
        `http://localhost:9000/MEMBER-SERVICE/membres/enseignant/${id}`,
        enseignant
      )
      .toPromise();
  }
  getStudentsByENcadrant(id:string):Promise<any>
  { const param = new HttpParams({
    fromObject: {  idens: id },
  });
  return this.http.put<any>('http://localhost:9000/MEMBER-SERVICE/etudiants/teacher',
    param)
    .toPromise();

  }
}
