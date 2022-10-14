import { Member } from './../../../modals/Member';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from './../../../services/articles.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/modals/Article';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  [x: string]: any;
  titleForm = '';
  cancel = 'cancel';
  confirm = 'confirm';
  currentId: any;
  form: any;
  authors: Member[] | undefined;
  globalArticle: Article | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { idArt: string },
    public dialogRef: MatDialogRef<ArticleFormComponent>,
    private service: ArticlesService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.currentId = this.data.idArt;
    console.log(this.currentId);
    if (!!this.currentId) {
      this.service
        .getArticleById(this.currentId)
        .then((currentArticle: Article) => {
          this.globalArticle = currentArticle;
          this.FormEdit(this.globalArticle);
        });
    } else this.initForm();
  }
  initForm(): void {
    this.titleForm = 'Create New Article';
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    // author: new FormControl(null, [Validators.required]),
    });
  }
  FormEdit(article: Article): void {
    this.titleForm = 'Edit Article';
    this.form = new FormGroup({
      title: new FormControl(article?.title, [Validators.required]),
     // author: new FormControl(article?.author, [Validators.required]),
    });
  }
  getAuthors() {
    this.memberService.getAll().then((authors: Member[]) => {
      console.log(
        (this.authors = authors.filter((elt) => elt.type == 'teacher'))
      );
    });
  }

  onSub() {}
}
