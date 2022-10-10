import { AffectAuthorComponent } from './affect-author/affect-author.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  
  {path:'members',
  pathMatch:'full',
  component:MembersComponent,
},
  {path:'create',
  pathMatch:'full',
  component:MemberFormComponent,},
{
  path:'members/:id/edit',
  pathMatch:'full',
  component:MemberFormComponent,
},
{path:'dashboard',
  pathMatch:'full',
  component:DashboardComponent,},
  {path:'articles',
  pathMatch:'full',
  component:ArticlesComponent,},
  {path:'articles/:id/affectAuthor',
  pathMatch:'full',
  component:AffectAuthorComponent,},
  {path:'tools',
  pathMatch:'full',
  component:ToolsComponent,},
  {path:'events',
  pathMatch:'full',
  component:EventsComponent,},
  {path:'**',
  redirectTo:"/",

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
