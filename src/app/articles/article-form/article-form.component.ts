import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  title = 'Are you sure';
  message = 'Do you really want to delete this item';
  cancel = 'cancel';
  confirm = 'confirm';
  constructor(public dialogRef: MatDialogRef<ArticleFormComponent>) { }

  ngOnInit(): void {
  }

}
