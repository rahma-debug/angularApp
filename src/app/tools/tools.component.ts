import { ConfirmedDialogComponent } from './../confirmed-dialog/confirmed-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Outil } from './../../modals/Outil';
import { MatTableDataSource } from '@angular/material/table';
import { ToolService } from './../../services/tool.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  dataSource: MatTableDataSource<Outil> = new MatTableDataSource();
  constructor(private service: ToolService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.fetchDataSource();
  }
  displayedColumns: string[] = ['id', 'source', 'date', 'icon'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteEvent(id: any) {
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.delete(id).then(() => {
          this.fetchDataSource();
          this.service.getAll().then((result) => console.log(result));
        });
      }
    });
  }
  fetchDataSource(): void {
    this.service.getAll().then((tools: Outil[]) => {
      this.dataSource.data = tools;
    });
  }
}
