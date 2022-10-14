import { Router } from '@angular/router';
import { AuthService } from './../../services/AuthService';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authServicePreDef:AuthService, private router: Router,private ngZone:NgZone) { }

  ngOnInit(): void {
  }
google():void
{
this.authServicePreDef.doGoogleLogin().then(()=>{
  this.successRedirect()
}).catch(Error=>console.log(Error))
}
  successRedirect() {
    this.ngZone.run(()=>{
      this.router.navigate(['/dashboard']);
    })
   
  }
}
