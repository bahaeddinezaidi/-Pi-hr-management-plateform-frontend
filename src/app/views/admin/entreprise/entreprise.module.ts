import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrpriseDetailsComponent } from './entreprise/entrprise-details/entrprise-details.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EntrpriseDetailsComponent,
    EntrepriseComponent,

  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
  ]
})
export class EntrepriseModule { }
