import { PublicationService } from './../../../services/publication.service';
import { Publication } from './../../../modals/Pub';
import { Member } from './../../../modals/Member';
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
  globalArticle: Publication | undefined;
  globalPub!: Publication;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { idArt: string; pub: Publication },
    public dialogRef: MatDialogRef<ArticleFormComponent>,
    private service: PublicationService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      sourcePdf: new FormControl(null, [Validators.required]),
      lien: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
    this.currentId = this.data.idArt;
    this.globalPub = this.data.pub;
    console.log(this.globalPub);
    console.log(this.currentId);
    if (this.currentId) {
      this.service.getPublicationById(this.currentId)
        .then((currentArticle: Publication) => {
          this.FormEdit( currentArticle);
        });
    } else this.initForm();
  }
  initForm(): void {
    this.titleForm = 'Create New Article';
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      sourcePdf: new FormControl(null, [Validators.required]),
      lien: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
  }
  FormEdit(article: any): void {
    console.log(article)
    this.titleForm = 'Edit Article';
    this.form = new FormGroup({
      titre: new FormControl(article.titre, [Validators.required]),
      type: new FormControl(article.type, [Validators.required]),
      sourcePdf: new FormControl(article.sourcePdf, [Validators.required]),
      lien: new FormControl(article.lien, [Validators.required]),
      date: new FormControl(article.date, [Validators.required]),
    });
  }
  onSub(){
if(this.titleForm = 'Edit Article')
{
  const Pub={
    "type":this.form.value.type,
    "titre":this.form.value.titre,
    "sourcePdf":this.form.value.sourcePdf,
    "date":this.form.value.date,
    "lien":this.form.value.lien,
  }
  this.service.updatePublication(Pub).then(
    this.router.navigate(['/articles'])
  )
}
else{
  this.service.createPublication({
    "type":this.form.value.type,
    "titre":this.form.value.titre,
    "sourcePdf":this.form.value.sourcePdf,
    "date":this.form.value.date,
    "lien":this.form.value.lien,
  }).then(
    this.router.navigate(['/articles'])
  )
}
  }
}
