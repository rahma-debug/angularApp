import { MatDialog } from '@angular/material/dialog';
import { ConfirmedDialogComponent } from './../confirmed-dialog/confirmed-dialog.component';
import { Member } from './../../modals/Member';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  constructor(
    private MemberService: MemberService,
    private router: Router,
    private dialog: MatDialog
  ) {
    // this.dataSource =new MatTableDataSource(this.MemberService.tab);
    this.fetchDataSource();
  }
  ngOnInit(): void {
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'createdDate',
    'cv',
    'type',
    'icon',
  ];
  deleteMember(id: any) {
    //open dialog
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {
      /* dimension du dialog */
    });
    //wait return user
    dialogRef.afterClosed().subscribe((result) => {
      //test button
      if (result) {
        //if confirm delete member
        this.MemberService.delete(id).then(() => {
          // this.dataSource = this.MemberService.tab;
          this.fetchDataSource();
        });
      }
    });
  }
  fetchDataSource(): void {
    // this.dataSource.data =this.MemberService.tab;
    this.MemberService.getAll().then((members: Member[]) => {
      this.dataSource.data = members;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
