import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Etudiant } from 'src/modals/Etudiant';
import { ToolService } from './../../../services/tool.service';
import { EventsService } from 'src/services/events.service';
import { PublicationService } from './../../../services/publication.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-organizerslist',
  templateUrl: './organizerslist.component.html',
  styleUrls: ['./organizerslist.component.scss']
})
export class OrganizerslistComponent implements OnInit {

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
    private toolService: ToolService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  currentIEvent:any
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })}
  ngOnInit(): void {
    
    this.currentIEvent = this.activatedRoute.snapshot.params.id;
    this.getAllStudents();
    this.eventService.getEventById(this.currentIEvent).then(result=>console.log(result))
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
  affecterOrgToEvent(idparticipant:any)
  {
this.eventService.addParticipantToEvent(idparticipant,this.activatedRoute.snapshot.params.id).then(()=>this.openSnackBar('successfully', 'affectation'))
  }
  }
 


