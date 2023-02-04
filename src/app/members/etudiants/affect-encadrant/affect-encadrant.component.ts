import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Member } from 'src/modals/Member';
import { MemberService } from 'src/services/member.service';
import { Enseignant } from 'src/modals/Enseignant';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-affect-encadrant',
  templateUrl: './affect-encadrant.component.html',
  styleUrls: ['./affect-encadrant.component.scss'],
})
export class AffectEncadrantComponent implements OnInit {
  constructor(
    private service: MemberService,
    public MatDialogRef: MatDialogRef<AffectEncadrantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idEtudiant: string },
    private _snackBar: MatSnackBar
  ) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  cancel = 'Back';

  dataSource: MatTableDataSource<Enseignant> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'email',
    'grade',
    'etablissement',
    'icon',
  ];
  getAllTeachers(): void {
    this.service
      .getAllTeachers()
      .then((result) => (this.dataSource.data = result));
  }

  ngOnInit(): void {
    this.getAllTeachers();
  }
  affecter(idTeacher: string) {
    this.service
      .affecterTeacherToStudent(this.data.idEtudiant, idTeacher)
      .then((result) => {
        this.openSnackBar('successfully', 'affectation');
      });
  }
}
