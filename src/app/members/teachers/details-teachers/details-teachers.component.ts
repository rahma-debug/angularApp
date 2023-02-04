import { Enseignant } from 'src/modals/Enseignant';
import { MemberService } from 'src/services/member.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/modals/Member';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-details-teachers',
  templateUrl: './details-teachers.component.html',
  styleUrls: ['./details-teachers.component.scss']
})
export class DetailsTeachersComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { idMember: string ,currentMember:Member},public dialogRef: MatDialogRef<DetailsTeachersComponent>,  private memberService: MemberService) {}
  panelOpenState = false;
  confirm = 'back';
students:any
  ngOnInit(): void {
    console.log(this.data.currentMember)
    console.log(this.data.currentMember.tools)
   this.getStudentsTeacher(this.data.currentMember.id)
  }
  getStudentsTeacher(ens:any)
  {
    this.memberService.getStudentsByENcadrant(ens).then(result=>this.students=result)
  }
}
