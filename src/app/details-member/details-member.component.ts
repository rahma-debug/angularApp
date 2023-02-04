import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from 'src/modals/Member';
import { MemberService } from 'src/services/member.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-details-member',
  templateUrl: './details-member.component.html',
  styleUrls: ['./details-member.component.scss']
})
export class DetailsMemberComponent implements OnInit {
  form: any;
  pubs:any
  encadrant:any

  currentId : any
  currentMember:Member | undefined
  constructor(@Inject(MAT_DIALOG_DATA) public data: { idMember: string ,currentMember:Member},public dialogRef: MatDialogRef<DetailsMemberComponent>,  private memberService: MemberService) {

  }

   ngOnInit(){
     this.getCurrentMember()
  }
  getCurrentMember()
  {
 // this.memberService.getDetailsMemberById(this.data.idMember).then(result=>console.log(result))
 this.currentId=this.data.idMember
 this.currentMember=this.data.currentMember
 this.pubs=this.data.currentMember.pubs
 this.encadrant=this.data.currentMember.encadrant

 console.log(this.pubs)
  /*  console.log(this.data.idMember)
   console.log(this.currentId)
   console.log(this.data.currentMember) */
   console.log(this.currentMember)
   this.form = new FormGroup({
    cin: new FormControl(this.currentMember.cin, [Validators.required]),
    name: new FormControl(this.currentMember.nom, [Validators.required]),
    email: new FormControl(this.currentMember.email, [Validators.required]),
    cv: new FormControl(this.currentMember.cv, [Validators.required]),
    type: new FormControl(this.currentMember.type , [Validators.required]),
    lastName:new FormControl(this.currentMember.prenom, [Validators.required]),
  });
  }

}
