
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name="eya"
  agenda=[{date:"26/7/2022",message:"hello 1"},{date:"26/7/2022",message:"hello 2"}]
}