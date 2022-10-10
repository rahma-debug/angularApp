import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmed-dialog',
  templateUrl: './confirmed-dialog.component.html',
  styleUrls: ['./confirmed-dialog.component.scss'],
})
export class ConfirmedDialogComponent implements OnInit {
  title = 'Are you sure';
  message = 'Do you really want to delete this item';
  cancel = 'cancel';
  confirm = 'confirm';
  constructor(public dialogRef: MatDialogRef<ConfirmedDialogComponent>) {}

  ngOnInit(): void {}
}
