import { AffectauthorToToolComponent } from './tools/affectauthor-to-tool/affectauthor-to-tool.component';
import { OrganizerslistComponent } from './events/organizerslist/organizerslist.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { FormtolsComponent } from './tools/formtols/formtols.component';
import { TeacherFormComponent } from './members/teachers/teacher-form/teacher-form.component';
import { FormEtudinatComponent } from './members/etudiants/form-etudinat/form-etudinat.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { LoginComponent } from './login/login.component';
import { AffectAuthorComponent } from './affect-author/affect-author.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';
import { EtudiantsComponent } from './members/etudiants/etudiants.component';
import { TeachersComponent } from './members/teachers/teachers.component';

const routes: Routes = [
  {path:'',
  pathMatch:'full',
  redirectTo:'dashboard',
},
  {path:'login',
  pathMatch:'full',
  component:LoginComponent,
},
{path:'members/students',
pathMatch:'full',
component:EtudiantsComponent,
},
{path:'members/students/:id/edit',
pathMatch:'full',
component:FormEtudinatComponent,
},
{path:'members/createStudent',
pathMatch:'full',
component:FormEtudinatComponent,
},
{path:'members/createTeacher',
pathMatch:'full',
component:TeacherFormComponent,
},
{path:'members/teachers/:id/edit',
pathMatch:'full',
component:TeacherFormComponent,
},
{path:'members/teachers',
pathMatch:'full',
component:TeachersComponent,
},
  {path:'members',
  pathMatch:'full',
  component:MembersComponent,
},
  {path:'createMember',
  pathMatch:'full',
  component:MemberFormComponent,},
  {path:'createEvent',
  pathMatch:'full',
  component:EventFormComponent,},
  {path:'createTool',
  pathMatch:'full',
  component:FormtolsComponent,},
  {
    path:'tools/:id/edit',
    pathMatch:'full',
    component:FormtolsComponent,
  },
  {path:'events',
  pathMatch:'full',
  component:EventsComponent,},
  {
    path:'events/:id/edit',
    pathMatch:'full',
    component:EventFormComponent,
  },
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
  {path:'createArticle',
  pathMatch:'full',
  component:ArticleFormComponent,},
  {path:'articles/:id/affectAuthor',
  pathMatch:'full',
  component:AffectAuthorComponent,},
  {path:'events/:id/affectOrganizers',
  pathMatch:'full',
  component:OrganizerslistComponent,},
  {path:'tools',
  pathMatch:'full',
  component:ToolsComponent,},
  {path:'tools/:id/affectCreater',
  pathMatch:'full',
  component:AffectauthorToToolComponent,},
 
  {path:'**',
  redirectTo:'/',

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
