import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';

import { ListeTasksComponent } from './liste-tasks/liste-tasks.component';


@NgModule({
  declarations: [
  
    ListeTasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
