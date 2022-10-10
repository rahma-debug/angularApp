import { global } from 'src/app/app_config';
import { Injectable } from '@angular/core';
import { Article } from 'src/modals/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  //creation de tab
  public tab: Article[] = global._db.Articles;
  constructor() {}
  getAll(): Promise<Article[]> {
    return new Promise((resolve) => resolve(this.tab));
  }
  delete(id: string): Promise<void> {
    //return this.httpClient.delete<void>('linkToRestApi').toPromise()
    this.tab = this.tab.filter((elt) => elt.id != id);
    return new Promise((resolve) => resolve());
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
}
