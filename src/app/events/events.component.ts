import { Event } from 'src/modals/Event';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/services/events.service';
import { ConfirmedDialogComponent } from '../confirmed-dialog/confirmed-dialog.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
events!:Event[]
  dataSource: MatTableDataSource<Event> = new MatTableDataSource();
  constructor(
    private service: EventsService,

    private dialog: MatDialog
  ) {
    // this.dataSource =new MatTableDataSource(this.MemberService.tab);
    this.fetchDataSource();
  }
 
  ngOnInit(): void {
    this.loadEvents()
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = [
    'id',
    'title',
    'lieu',
    'date',
    'icon'
  ];
  deleteEvent(id: any) {
  
    const dialogRef = this.dialog.open(ConfirmedDialogComponent, {
    
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
         this.service.delete(id).then(() => {
          this.fetchDataSource();
        }); 
      }
    });
  }
  fetchDataSource(): void {
    // this.dataSource.data =this.MemberService.tab;
    this.service.getAll().then((events:Event[]) => {
      console.log(events)
      this.dataSource.data = events;
    });
  }
  loadEvents():void
  {
     // this.dataSource.data =this.MemberService.tab;
     this.service.getAll().then((events:Event[]) => {
      this.events = events;
    });
  }

}
