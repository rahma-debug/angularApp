import { Article } from './../../modals/Article';
import { ArticlesService } from 'src/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from './../../modals/Member';
import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affect-author',
  templateUrl: './affect-author.component.html',
  styleUrls: ['./affect-author.component.scss'],
})
export class AffectAuthorComponent implements OnInit {
  title="Pick author"
  cancel = 'cancel';
  confirm = 'confirm';
  selected!:string
  authors: Member[] | undefined;
  currentId: any;
  constructor(
    private memberService: MemberService,
    private articleService: ArticlesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    
    
  }

  ngOnInit(): void {
    //get the id of article from url
    this.currentId = this.activatedRoute.snapshot.params.id;
    //console.log(this.currentId);
    //get tab of authors 
    this.getAuthors();
  }

  getAuthors() {
    this.memberService.getAll().then((authors: Member[]) => {
      console.log(
        (this.authors = authors.filter((elt) => elt.type == 'teacher'))
      );
    });
  }

  affectAuthor(authorName:string)
  {this.articleService
    .getArticleById(this.currentId)
    .then((selectedArticle: Article) => {
      const objToSubmit = {...selectedArticle,author: authorName };
      this.articleService.saveAricle(objToSubmit).then(() => {
        this.router.navigate(['/articles']);
      });
    });

  }
}
