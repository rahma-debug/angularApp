import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsMemberComponent } from './../details-member/details-member.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedDialogComponent } from './../confirmed-dialog/confirmed-dialog.component';
import { Member } from './../../modals/Member';
import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  items :any
  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  constructor(
    private MemberService: MemberService,
   
    private dialog: MatDialog
  ) {
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
  deleteMember(id: string) {
    //open dialog
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {
      /* dimension du dialog */
    });
    //wait return user
    dialogRef.afterClosed().subscribe((result) => {
      //test button
      if (result) {
        //if confirm delete member
       this.MemberService.deleteTest(id).then(() => {
        this.fetchDataSource()
        });
      }
    });
  }
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
 
  async detailsMember(id:number)
  {
    let currentMember!: Member;
    await this.MemberService.getDetailsMemberById(id).then((result: Member)=>currentMember=result)
     const dialogRef = this.dialog.open(DetailsMemberComponent, {
      data:{
        idMember: id,
        currentMember:currentMember
       } 
    });
  }

}

