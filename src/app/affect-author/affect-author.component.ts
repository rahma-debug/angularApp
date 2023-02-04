import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { PublicationService } from './../../services/publication.service';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from './../../modals/Article';
import { ArticlesService } from 'src/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from './../../modals/Member';
import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/modals/Enseignant';

@Component({
  selector: 'app-affect-author',
  templateUrl: './affect-author.component.html',
  styleUrls: ['./affect-author.component.scss'],
})
export class AffectAuthorComponent implements OnInit {
  currentIdPub:any
  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'createdDate',
    'cv',
    'type',
    'icon',
  ];

  currentId: any;
  constructor(
    private memberService: MemberService,
    private articleService: PublicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    
    
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
    this.currentIdPub = this.activatedRoute.snapshot.params.id;
    this.fetchDataSource()
  }
  fetchDataSource(): void {
    this.memberService.getAll().then((members: Member[]) => {
      this.dataSource.data = members;
      console.log(this.dataSource.data )
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  affecterAthorToPub(id:any)
  {
this.articleService.addAuteurToPublication(id, this.currentIdPub).then(()=>this.openSnackBar('successfully', 'affectation'))
  }
}
