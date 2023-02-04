import { Etudiant } from 'src/modals/Etudiant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/services/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-etudinat',
  templateUrl: './form-etudinat.component.html',
  styleUrls: ['./form-etudinat.component.scss'],
})
export class FormEtudinatComponent implements OnInit {
  hide = true;
  [x: string]: any;
  titleForm = '';
  currentId: any;
  form: any;
  globalMember: Etudiant | undefined;
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
      diplome: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      dateInscription: new FormControl(null, [Validators.required]),
    });
    if (!!this.currentId) {
      this.memberService
        .getStudentById(this.currentId)
        .then((currentMember) => {
          this.globalMember = currentMember;
          this.initFormEdit(this.globalMember);
        });
    } else this.initForm();
  }
  initForm(): void {
    this.titleForm = 'Create New Student';
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      diplome: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      dateInscription: new FormControl(null, [Validators.required]),
    });
  }
  initFormEdit(member: Etudiant): void {
    this.titleForm = 'Edit Student';
    this.form = new FormGroup({
      cin: new FormControl(member?.cin, [Validators.required]),
      nom: new FormControl(member?.nom, [Validators.required]),
      prenom: new FormControl(member?.prenom, [Validators.required]),
      email: new FormControl(member?.email, [Validators.required]),
      password: new FormControl(member?.password, [Validators.required]),
      diplome: new FormControl(member?.diplome, [Validators.required]),
      cv: new FormControl(member?.cv, [Validators.required]),
      dateInscription: new FormControl(member?.dateInscription, [
        Validators.required,
      ]),
    });
  }
  onSub(): void {
    if (this.titleForm == 'Edit Student') {
      /* const objToSubmit = { ...this.globalMember, ...this.form.value }; */
      this.memberService.updateEtd(this.form.value).then(() => {
        this.router.navigate(['/members/students']);
      });
    }  else {
        const objToSubmit = { ...this.globalMember, ...this.form.value };

        this.memberService.createEtudiant(objToSubmit).then(
          //redirection/members
          () => {
            this.router.navigate(['/members/students']);
          }
        );
      }
    }
  
}
