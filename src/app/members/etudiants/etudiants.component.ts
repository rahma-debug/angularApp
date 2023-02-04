import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { Member } from 'src/modals/Member';
import { EventsService } from 'src/services/events.service';
import { ToolService } from './../../../services/tool.service';
import { PublicationService } from './../../../services/publication.service';
import { AffectEncadrantComponent } from './affect-encadrant/affect-encadrant.component';
import { ConfirmedDialogComponent } from 'src/app/confirmed-dialog/confirmed-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { Etudiant } from 'src/modals/Etudiant';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss'],
})
export class EtudiantsComponent implements OnInit {
  listStudents!: Etudiant[];
  dataSource: MatTableDataSource<Etudiant> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'email',
    'cv',
    'diplome',
    'dateInscription',
    'icon',
  ];
  memberToDelete: any;
  constructor(
    private service: MemberService,
    private dialog: MatDialog,
    private publicationService: PublicationService,
    private eventService: EventsService,
    private toolService: ToolService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents(): void {
    this.service
      .getAllStudents()
      .then((result) => (this.dataSource.data = result));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteMember(id: any) {
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.getMemberById(id).then((result) => this.memberToDelete);
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
            }
          }
          if (result.tools?.length != 0) {
            for (let i = 0; i < result.tools.length; i++) {
              this.toolService
                .removeAuteurFromTool(id, Number(result.tools[i].id))
                .then();
            }
          }
        });
        this.service.deleteMember(id).then(() => this.getAllStudents());
      }
    });
  }
  async openDialog(id: string): Promise<void> {
    const dialogRef = this.dialog.open(AffectEncadrantComponent, {
      data: { idEtudiant: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllStudents();
    });
  }
 async  detailsMember(id: any) {
    let currentMember!: Member;
   await  this.service
      .getDetailsMemberById(id)
      .then((result: Member) => currentMember = result);
    const dialogRef = this.dialog.open(EtudiantDetailsComponent, {
      data: {
        idMember: id,
        currentMember: currentMember,
      },
    });
  }
}
