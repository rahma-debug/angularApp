import { MemberService } from 'src/services/member.service';
import { DetailsTeachersComponent } from './../../teachers/details-teachers/details-teachers.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/modals/Member';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.scss']
})
export class EtudiantDetailsComponent implements OnInit {
  confirm='back'
  panelOpenState = false;
  Encadrant:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: { idMember: string ,currentMember:Member},public dialogRef: MatDialogRef<EtudiantDetailsComponent>,  private memberService: MemberService) {}
  ngOnInit(): void {
    console.log(this.data.currentMember)
    this.Encadrant=this.data.currentMember.encadrant
    console.log(this.Encadrant)
  }


}
