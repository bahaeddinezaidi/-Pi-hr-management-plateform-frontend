import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateacountComponent } from './createacount/createacount.component';

const routes: Routes = [
  {path:'',component:CreateacountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAcountRoutingModule { }
