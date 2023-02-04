import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EventFormComponent } from './events/event-form/event-form.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EtudiantsComponent } from './members/etudiants/etudiants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmedDialogComponent } from './confirmed-dialog/confirmed-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { AffectAuthorComponent } from './affect-author/affect-author.component';
import {MatRadioModule} from '@angular/material/radio';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import{FirebaseModule} from "./Firebase.module";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DetailsMemberComponent } from './details-member/details-member.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TeachersComponent } from './members/teachers/teachers.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormEtudinatComponent } from './members/etudiants/form-etudinat/form-etudinat.component';
import { AffectEncadrantComponent } from './members/etudiants/affect-encadrant/affect-encadrant.component';
import { TeacherFormComponent } from './members/teachers/teacher-form/teacher-form.component';
import { FormtolsComponent } from './tools/formtols/formtols.component';
import { DetailsTeachersComponent } from './members/teachers/details-teachers/details-teachers.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EtudiantDetailsComponent } from './members/etudiants/etudiant-details/etudiant-details.component';
import { OrganizerslistComponent } from './events/organizerslist/organizerslist.component';
import { ToastComponent } from './toast/toast.component';
import { AffectauthorToToolComponent } from './tools/affectauthor-to-tool/affectauthor-to-tool.component';


@NgModule({
  declarations: [
    
    AppComponent,
    MembersComponent,
    EtudiantsComponent,
    MemberFormComponent,
    ConfirmedDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ArticlesComponent,
    ToolsComponent,
    EventsComponent,
    AffectAuthorComponent,
    ArticleFormComponent,
    LoginComponent,
    EventFormComponent,
    DetailsMemberComponent,
    TeachersComponent,
    FormEtudinatComponent,
    AffectEncadrantComponent,
    TeacherFormComponent,
    FormtolsComponent,
    DetailsTeachersComponent,
    EtudiantDetailsComponent,
    OrganizerslistComponent,
    ToastComponent,
    AffectauthorToToolComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatPaginatorModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserModule,
    MatTreeModule,
    
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    FirebaseModule,
    MatCardModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatTooltipModule,
   Ng2SmartTableModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
