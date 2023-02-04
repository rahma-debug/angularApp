import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsTeachersComponent } from './details-teachers/details-teachers.component';
import { PublicationService } from './../../../services/publication.service';
import { ToolService } from './../../../services/tool.service';
import { EventsService } from 'src/services/events.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MemberService } from 'src/services/member.service';
import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/modals/Enseignant';
import { ConfirmedDialogComponent } from 'src/app/confirmed-dialog/confirmed-dialog.component';
import { Member } from 'g:/dev/angularApp/src/modals/Member';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  listTeachers!: Enseignant[];
  dataSource: MatTableDataSource<Enseignant> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'email',
    'cv',
    'grade',
    'etablissement',
    'icon',
  ];
  students!: Member[];
  memberToDelete!: Member;
  constructor(
    private service: MemberService,
    private eventService: EventsService,
    private toolService: ToolService,
    private publicationService: PublicationService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}
  durationInSeconds = 5;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
  ngOnInit(): void {
    this.getAllTeachers();
  }
  getAllTeachers(): void {
    this.service
      .getAllTeachers()
      .then((result) => (this.dataSource.data = result));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   deleteMember(id: any) {
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {});
    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        this.service
          .getMemberById(id)
          .then((result) => this.memberToDelete);
         this.service.getDetailsMemberById(id).then((result) => {
          console.log(result);
          if (result.pubs.length != 0) {
            for (let i = 0; i < result.pubs.length; i++) {
              this.publicationService
                .removeAuteurFromPublication(id, Number(result.pubs[i].id))
                .then();
            }
          }
          if (result.events?.length != 0) {
            for (let i = 0; i < result.events.length; i++) {
              this.eventService
                .removeParticipantFromEvent(id, Number(result.events[i].id))
                .then();
            }}
            if (result.tools?.length != 0) {
              for (let i = 0; i < result.tools.length; i++) {
                this.toolService.removeAuteurFromTool(id, Number(result.tools[i].id))
                  .then();
              }
          }
        });
        this.service.deleteMember(id).then(()=>{
          this.openSnackBar("successfully", "delete")
          this.getAllTeachers()})
        
      }
    });
  }
  
  async detailsMember(id: any) {
    let currentMember!: Member;
    await this.service
      .getDetailsMemberById(id)
      .then((result: Member) => (currentMember = result));
    const dialogRef = this.dialog.open(DetailsTeachersComponent, {
      data: {
        idMember: id,
        currentMember: currentMember,
      },
    });
  }
}
