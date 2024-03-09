import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAcountRoutingModule } from './create-acount-routing.module';
import { CreateacountComponent } from './createacount/createacount.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateacountComponent
  ],
  imports: [
    CommonModule,
    CreateAcountRoutingModule,FormsModule
  ]
})
export class CreateAcountModule { }
