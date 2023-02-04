import { AffectEncadrantComponent } from './../members/etudiants/affect-encadrant/affect-encadrant.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {



  ngOnInit(): void {
  }
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AffectEncadrantComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
