import { Member } from './../../modals/Member';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  hide = true;
  [x: string]: any;
  titleForm = '';
  currentId: any;
  form: any;
  types=["teacher","student"]
  globalMember: Member | undefined;
  constructor(
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //injection de dep
  }
  ngOnInit(): void {
    //recuperation de id du URL
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId);
    //si id a une valeur declencher la fonction du service
    if (!!this.currentId) {
      //getMemberById(id)=>member
      this.memberService.getMemberById(this.currentId).then((currentMember) => {
        this.globalMember = currentMember;
        //creer l'obj avec initialisation des donnees de member
        this.initFormEdit(this.globalMember);
      });
    }

    //sinon appeler la fonction initForm()
    else this.initForm(); //creer l'obj avec initialisation null
  }
  initForm(): void {
    this.titleForm = 'Create New Member';
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      diplome: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
  initFormEdit(member: Member): void {
    this.titleForm = 'Edit Member';
    this.form = new FormGroup({
      cin: new FormControl(member?.cin, [Validators.required]),
      nom: new FormControl(member?.nom, [Validators.required]),
      prenom: new FormControl(member?.prenom, [Validators.required]),
      email: new FormControl(member?.email, [Validators.required]),
      password: new FormControl(member?.password, [Validators.required]),
      grade: new FormControl(member?.grade, [Validators.required]),
      diplome: new FormControl(member?.diplome, [Validators.required]),
      etablissement: new FormControl(member?.etablissement, [Validators.required]),
      cv: new FormControl(member?.cv, [Validators.required]),
      type: new FormControl(member?.type, [Validators.required]),
    });
  }
  onSub(): void {
    if(this.titleForm == 'Edit Member')
    { 
      const objToSubmit ={...this.globalMember,...this.form.value} ;
this.memberService.update(objToSubmit).then(
  () => {
    this.router.navigate(['/members']);
  }
)
    }
    else if(this.titleForm != 'Edit Member')
    {
      if(this.form.value.type=="teacher")
      {
        const objToSubmit ={...this.globalMember,...this.form.value} ;
   
        this.memberService.createEns(objToSubmit).then(
         //redirection/members
         () => {
           this.router.navigate(['/members']);
         }
       ); 
      }
      else{
        const objToSubmit ={...this.globalMember,...this.form.value} ;
   
        this.memberService.createEtudiant(objToSubmit).then(
         //redirection/members
         () => {
           this.router.navigate(['/members']);
         }
       ); 

      }
    }
 
  }

  
}
