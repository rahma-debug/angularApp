import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToolService } from './../../../services/tool.service';
import { ActivatedRoute } from '@angular/router';

import { MemberService } from 'src/services/member.service';
import { Member } from 'src/modals/Member';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affectauthor-to-tool',
  templateUrl: './affectauthor-to-tool.component.html',
  styleUrls: ['./affectauthor-to-tool.component.scss']
})
export class AffectauthorToToolComponent implements OnInit {
  items :any
  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  currentIdTool: any;
  constructor(
    private MemberService: MemberService,
    private activatedRoute:ActivatedRoute,
    private service:ToolService,
    private _snackBar: MatSnackBar
  ) {
    this.fetchDataSource();
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 1;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
    this.currentIdTool = this.activatedRoute.snapshot.params.id;
  }
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'cv',
    'type',
    'icon',
  ];
 
  fetchDataSource(): void {
    this.MemberService.getAll().then((members: Member[]) => {
      this.dataSource.data = members;
      console.log(this.dataSource.data )
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  affecterOrgToTool(id:any)
  {
this.service.addAuteurToTool(id,this.currentIdTool).then(()=>this.openSnackBar('successfully', 'affectation'))
  }
 
}