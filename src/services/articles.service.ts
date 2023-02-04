import { HttpClient } from '@angular/common/http';
import { global } from 'src/app/app_config';
import { Injectable } from '@angular/core';
import { Article } from 'src/modals/Article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  //creation de tab
  public urli="http://localhost:9000/PUBLICATION-SERVICE"
  public tab: Article[] = global._db.Articles;
  constructor(private http: HttpClient) {}
  getAll(): Promise<Article[]> {
    return new Promise((resolve) => resolve(this.tab));
  }
  delete(id: string): Promise<void> {
   
let httpOptions = {
  headers : ({'Content-Type': 'application/json'})
  }

    return this.http.delete<void>('/publication/'+id,httpOptions).toPromise()
    /* this.tab = this.tab.filter((elt) => elt.id != id);
    return new Promise((resolve) => resolve()); */
  }
  getArticleById(cuurrentId: any): Promise<Article> {
    return new Promise((resolve) =>
      resolve(this.tab.filter((elt) => elt.id === cuurrentId)[0] ?? null)
    );
  }
  saveAricle(articleToSave: Article): Promise<void> {
    //promise :plus rapide,observable:thread
    // return this.httpClient.post<article>('linkToRestApi',articleToSave).toPromise();
    const objectToInsert = {
      ...articleToSave,
    };
    this.tab = [
      objectToInsert,
      ...this.tab.filter((elt) => elt.id != objectToInsert.id),
    ];
    return new Promise((resolve) => resolve());
  }
  loadArticles(): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      let url = environment.url + "PUBLICATION-SERVICE/publications";
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
 
  deletePublication(id:number) : Promise<void>{
    return this.http.delete<void>(this.urli+"/publication/" + id).toPromise();
  }
  
}
