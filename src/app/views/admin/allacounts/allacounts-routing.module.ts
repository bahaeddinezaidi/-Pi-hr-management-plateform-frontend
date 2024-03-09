import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllacountsComponent } from './allacounts/allacounts.component';

const routes: Routes = [
  {path:'',component:AllacountsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllacountsRoutingModule { }
