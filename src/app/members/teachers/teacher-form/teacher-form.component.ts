import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/services/member.service';
import { Enseignant } from 'src/modals/Enseignant';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  hide = true;
  [x: string]: any;
  titleForm = '';
  currentId: any;
  form: any| undefined;
  globalMember: Enseignant | undefined;
  constructor(
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),

    });
    if (!!this.currentId) {
      this.memberService
        .getTeacherById(this.currentId)
        .then((currentMember) => {
          this.globalMember = currentMember;
          this.initFormEdit(this.globalMember);
        });
    } else this.initForm();
  }
  initForm(): void {
    this.titleForm = 'Create New Teacher';
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),

    });
  }
  initFormEdit(member: Enseignant): void {
    this.titleForm = 'Edit Teacher';
    this.form = new FormGroup({
      cin: new FormControl(member?.cin, [Validators.required]),
      nom: new FormControl(member?.nom, [Validators.required]),
      prenom: new FormControl(member?.prenom, [Validators.required]),
      email: new FormControl(member?.email, [Validators.required]),
      password: new FormControl(member?.password, [Validators.required]),
      grade: new FormControl(member?.grade, [Validators.required]),
      cv: new FormControl(member?.cv, [Validators.required]),
      etablissement: new FormControl(member?.etablissement, [Validators.required]),
   
    });
  }
  onSub(): void {
    if (this.titleForm == 'Edit Teacher') {
      const objToSubmit = { ...this.globalMember, ...this.form.value };
      this.memberService.updateEns(objToSubmit).then(() => {
        this.router.navigate(['/members/teachers']);
      });
    }  else {
        const objToSubmit = { ...this.globalMember, ...this.form.value };

        this.memberService.createEns(objToSubmit).then(
          //redirection/members
          () => {
            this.router.navigate(['/members/teachers']);
          }
        );
      }
    }
 
  
}