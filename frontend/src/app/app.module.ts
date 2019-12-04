
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { JwtModule } from '@auth0/angular-jwt';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import './extensions/hyperlambda.js';

import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { HomeComponent } from './components/home/home.component';
import { EvaluatorComponent } from './components/evaluator/evaluator.component';
import { FilesComponent } from './components/files/files.component';
import { NewFileDialogComponent } from './components/files/modals/new-file-dialog';
import { ConfirmDeletionDialogComponent } from './components/files/modals/confirm-deletion-dialog';
import { CreateValidatorDialogComponent } from './components/crudify/modals/create-validator-dialog';
import { CrudifyComponent } from './components/crudify/crudify.component';
import { environment } from 'src/environments/environment';
import { SqlComponent } from './components/sql/sql.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { DateFromPipe } from './pipes/date-from-pipe';
import { DynamicPipe } from './pipes/dynamic-pipe';
import { NewTaskDialogComponent } from './components/scheduler/modals/new-task-dialog';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    EndpointsComponent,
    HomeComponent,
    EvaluatorComponent,
    FilesComponent,
    NewFileDialogComponent,
    ConfirmDeletionDialogComponent,
    NewTaskDialogComponent,
    CreateValidatorDialogComponent,
    CrudifyComponent,
    SqlComponent,
    SchedulerComponent,
    DateFromPipe,
    DynamicPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.apiDomain],
      }
    }),
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatMomentDateModule,
    CodemirrorModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NewFileDialogComponent, NewTaskDialogComponent, ConfirmDeletionDialogComponent, CreateValidatorDialogComponent]
})
export class AppModule { }
