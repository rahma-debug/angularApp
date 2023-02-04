import { PublicationService } from './../../services/publication.service';
import { ToolService } from './../../services/tool.service';
import { Router } from '@angular/router';
import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/services/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Enis21 Lab';
  toolsList: any;
  memberList: any;
  publicationList: any;
  eventsList: any;
  EtList: any;
  EnsList: any;
  constructor(private membreservice: MemberService,
              private router: Router,
              private publicationservice: PublicationService,
              private toolservice: ToolService,
              private eventService: EventsService) { }

  ngOnInit(): void {
    this.membreservice.getAll().then(data => {
      this.memberList = data.length;
    });
    this.eventService.getAll().then(data => {
      this.eventsList = data.length;
    });
    this.publicationservice.getAll().then(data => {
      this.publicationList = data.length;
    });
    this.toolservice.getAll().then(data => {
      this.toolsList = data.length;
    });
    this.membreservice. getAllTeachers().then(data => {
      this.EnsList = data.length;
    });
    this.membreservice.getAllStudents().then(data => {
      this.EtList = data.length;
    });
  }
  redirectToMembers(): void{
    this.router.navigate(['./members/teachers']);
  }
  redirectTotools(): void{
    this.router.navigate(['./tools']);
  }
  redirectTopublication(): void{
    this.router.navigate(['./articles']);
  }
  redirectToevents(): void{
    this.router.navigate(['./events']);
  }
  

}
