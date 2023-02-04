import { MemberService } from './../../../services/member.service';
import { Member } from './../../../modals/Member';
import { Event } from 'src/modals/Event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/services/events.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(<Date | null>(null)),
    end: new FormControl(<Date | null>(null)),
  });
  [x: string]: any;
  titleForm = '';
  currentId: any;
  form: any;
  globalEvent: Event | undefined;
  Listorganizers:any=[]
  constructor(
    private memberService:MemberService,
    private service: EventsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
  ) {
    //injection de dep
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required]),
    });
     //recuperation list of members
    this.memberService.loadMembers().then((members: Member[]) => {
      if(members)
      {
for(let i=0;i<members.length;i++ )
{
  this.Listorganizers.push(members[i].nom);
}
      }
     
    });
    console.log(this.Listorganizers)
    //recuperation de id du URL
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId);
    //si id a une valeur declencher la fonction du service
    if (!!this.currentId) {
      //getMemberById(id)=>member
      this.service.getEventById(this.currentId).then((currentEvent) => {
        this.globalEvent = currentEvent;
        //creer l'obj avec initialisation des donnees de member
        this.initFormEdit(this.globalEvent);
      });
    }

    //sinon appeler la fonction initForm()
    else this.initForm(); //creer l'obj avec initialisation null
  }
  initForm(): void {
    this.titleForm = 'Create New Event';
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
  }
  initFormEdit(event: Event): void {
    this.titleForm = 'Edit Event';
    this.form = new FormGroup({
      titre: new FormControl(event?.titre, [Validators.required]),
      lieu: new FormControl(event?.lieu, [Validators.required]),
      date: new FormControl(event?.date, [Validators.required]),
    });
  }
  onSub(): void {
    console.log(this.form.value);
    const objToSubmit ={...this.globalEvent,...this.form.value} ;
    if(this.titleForm == 'Create New Event')
    {
      this.service.createEvent(this.form.value).then(()=>  this.router.navigate(['/events']))
    }
   else{
    this.service.updateEvent(this.form.value).then(()=>  this.router.navigate(['/events']))
   }
  } 
 
}
