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
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  dataSource: MatTableDataSource<Article> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
   'title',
   'author',
   'year',
   'icon'
  ];
  constructor(private service :ArticlesService,private dialog: MatDialog) { 
    this.fetchDataSource();
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  fetchDataSource(): void {
    this.service.getAll().then((articles: Article[]) => {
      this.dataSource.data = articles;
    });
  }

  deleteArticle(id: any) {
    //open dialog
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {
      /* dimension du dialog */
    });
    //wait return user
    dialogRef.afterClosed().subscribe((result) => {
      //test button
      if (result) {
        //if confirm delete Article
        this.service.delete(id).then(() => {
          // this.dataSource = this.MemberService.tab;
          this.fetchDataSource();
        });
      }
    });
  }
  editArticle(id:any)
  {
       //open dialog
       const dialogRef = this.dialog.open(ArticleFormComponent, {
        /* dimension du dialog */
      });
      //wait return user
      dialogRef.afterClosed().subscribe((result) => {
        //test button
        if (result) {
          //if confirm delete Article
         /*  this.service.delete(id).then(() => {
            // this.dataSource = this.MemberService.tab;
            this.fetchDataSource();
          }); */
        }
      });
  }

}
