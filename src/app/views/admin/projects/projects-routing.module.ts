import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsModule } from './projects.module';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
