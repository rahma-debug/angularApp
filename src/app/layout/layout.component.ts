import { Router } from '@angular/router';
import { AuthService } from './../../services/AuthService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  panelOpenState = false;
  constructor( private router: Router,private service:  AuthService) { }

  ngOnInit(): void {
  }
  logout():void
  {
   this.service.doLogout().finally(()=>{this.router.navigate(['/login'])})
  }
  

}
