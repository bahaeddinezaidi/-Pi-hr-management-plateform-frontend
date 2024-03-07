import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements/departements.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditDepartmentComponent } from './departements/edit-department/edit-department.component';


@NgModule({
  declarations: [
    DepartementsComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartementsRoutingModule,
    FormsModule, 
    HttpClientModule,
    NgbModalModule,
    ReactiveFormsModule
    
  ]
})
export class DepartementsModule { }
