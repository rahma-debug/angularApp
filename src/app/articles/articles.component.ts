import { Publication } from './../../modals/Pub';
import { PublicationService } from './../../services/publication.service';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmedDialogComponent } from './../confirmed-dialog/confirmed-dialog.component';
import { Article } from './../../modals/Article';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/services/articles.service';
import { ArticleFormComponent } from './article-form/article-form.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  items: any;
  dataSource: MatTableDataSource<Publication> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'type', 'year', 'icon'];
  publicationService: any;
  constructor(
    private service: ArticlesService,
    private dialog: MatDialog,
    private servicePub: PublicationService
  ) {
    this.fetchDataSource();
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  fetchDataSource(): void {
    this.servicePub.getAll().then((articles: Publication[]) => {
      this.dataSource.data = articles;
    });
  }

  CurrentPub: any;
  async editArticle(id: any) {
    await this.servicePub
      .getPublicationById(id)
      .then((result) => (this.CurrentPub = result));
    const dialogRef = this.dialog.open(ArticleFormComponent, {
      data: { idArt: id },
    });
    //wait return user
    dialogRef.afterClosed().subscribe((result) => {
      //test button
      if (result) {
        this.fetchDataSource();
      }
    });
  }
  globalPub!: Publication;
  async deleteArticle(id: any) {
    await this.servicePub
      .getPublicationById(id)
      .then((result) => (this.globalPub = result));
    const dialogRef = this.dialog.open(ConfirmedDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.servicePub
          .removePublicationParticipants(id)
          .then()
          .catch((error) => {
            console.log(error);
          });
        this.servicePub
          .removePublicationById(id)
          .then(() => this.fetchDataSource())
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  createArticle() {
    const dialogRef = this.dialog.open(ArticleFormComponent, {
      data: { idArt: null },
    });
    //wait return user
    dialogRef.afterClosed().subscribe((result) => {
      //test button
      if (result) {
        this.fetchDataSource();
      }
    });
  }

  onSub() {}
  async detailsPub(id: string) {
    let currentPub!: Publication;
    await this.servicePub
      .getPublicationById(id)
      .then((result: Publication) => (currentPub = result));
    const dialogRef = this.dialog.open(ArticleFormComponent, {
      data: {
        idPublication: id,
        currentPublication: currentPub,
      },
    });
  }
}
