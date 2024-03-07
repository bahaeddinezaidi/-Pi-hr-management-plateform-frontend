import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './departements/departements.component';
import { EditDepartmentComponent } from './departements/edit-department/edit-department.component';

const routes: Routes = [
  {path:'',component: DepartementsComponent},
  {path:':_id',component:EditDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementsRoutingModule { }
