import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllacountsRoutingModule } from './allacounts-routing.module';
import { AllacountsComponent } from './allacounts/allacounts.component';


@NgModule({
  declarations: [
    AllacountsComponent
  ],
  imports: [
    CommonModule,
    AllacountsRoutingModule
  ]
})
export class AllacountsModule { }
